output "app_public_ip" {
  description = "Public IP address of the deployed web application"
  value       = azurerm_container_group.webapp.ip_address
}

output "acr_login_server" {
  description = "Azure Container Registry login server URL"
  value       = azurerm_container_registry.acr.login_server
}