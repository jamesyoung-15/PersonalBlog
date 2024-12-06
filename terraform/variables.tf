variable "aws_region" {
  type = string
  description = "Set AWS region"
  default = "us-east-1"
}

variable "aws_profile" {
  type = string
  description = "Set AWS CLI profile"
  default = "default"
}

variable "cloudflare_api_token" {
  type = string
  description = "Cloudflare API token"
}