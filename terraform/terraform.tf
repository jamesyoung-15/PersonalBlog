terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "> 5.4"
    }
    cloudflare = {
        source = "cloudflare/cloudflare"
        version = ">5.0"
    }
  }
  backend "s3" {
    bucket         = "terraform-state-backend-jyylab" # Change to bucket name
    key            = "prod/blog"
    region = "us-east-1"
    encrypt = true
  }
}