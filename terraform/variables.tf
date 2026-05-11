variable "resource_group_name" {
  description = "Name of the Azure resource group"
  type        = string
  default     = "devops-challenge-rg"
}

variable "location" {
  description = "Azure region to deploy resources"
  type        = string
  default     = "francecentral"
}

variable "acr_name" {
  description = "Name of the Azure Container Registry (must be globally unique)"
  type        = string
  default     = "devopswebappacr"
}

variable "image_name" {
  description = "Docker image name"
  type        = string
  default     = "webapp"
}

variable "image_tag" {
  description = "Docker image tag"
  type        = string
  default     = "latest"
}