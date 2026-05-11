terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }

  # Store Terraform state remotely in Azure Blob Storage
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "tfstatedevopss"
    container_name       = "tfstate"
    key                  = "webapp.tfstate"
  }
}

provider "azurerm" {
  features {}
}

# Resource Group that holds all project resources
resource "azurerm_resource_group" "main" {
  name     = var.resource_group_name
  location = var.location
}

# Azure Container Registry to store Docker images
resource "azurerm_container_registry" "acr" {
  name                = var.acr_name
  resource_group_name = azurerm_resource_group.main.name
  location            = azurerm_resource_group.main.location
  sku                 = "Basic"
  admin_enabled       = true
}

# Azure Container Instance to run the Docker container
resource "azurerm_container_group" "webapp" {
  name                = "webapp-container"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  ip_address_type     = "Public"
  dns_name_label      = "moonshill-webapp"
  os_type             = "Linux"

  container {
    name   = "webapp"
    image  = "${azurerm_container_registry.acr.login_server}/${var.image_name}:${var.image_tag}"
    cpu    = "0.5"
    memory = "1.5"

    ports {
      port     = 80
      protocol = "TCP"
    }

    environment_variables = {
      NODE_ENV = "production"
    }
  }

  image_registry_credential {
    server   = azurerm_container_registry.acr.login_server
    username = azurerm_container_registry.acr.admin_username
    password = azurerm_container_registry.acr.admin_password
  }

  tags = {
    environment = "production"
    project     = "devops-challenge"
  }
}

# Log Analytics Workspace for collecting logs and metrics
resource "azurerm_log_analytics_workspace" "main" {
  name                = "webapp-logs"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

# Diagnostic setting to forward container logs to Log Analytics
resource "azurerm_monitor_diagnostic_setting" "container_logs" {
  name                       = "webapp-diagnostics"
  target_resource_id         = azurerm_container_group.webapp.id
  log_analytics_workspace_id = azurerm_log_analytics_workspace.main.id

  enabled_log {
    category = "ContainerInstanceLog"
  }

  metric {
    category = "AllMetrics"
    enabled  = true
  }
}

# Alert rule for when CPU usage goes above 80 percent
resource "azurerm_monitor_metric_alert" "cpu_alert" {
  name                = "webapp-cpu-alert"
  resource_group_name = azurerm_resource_group.main.name
  scopes              = [azurerm_container_group.webapp.id]
  description         = "Alert when CPU usage exceeds 80 percent"
  severity            = 2

  criteria {
    metric_namespace = "Microsoft.ContainerInstance/containerGroups"
    metric_name      = "CpuUsage"
    aggregation      = "Average"
    operator         = "GreaterThan"
    threshold        = 80
  }
}