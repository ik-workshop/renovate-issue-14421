variable "region" {
  description = "Region where the AWS resources will be provisioned"
  type        = string
  default     = "eu-west-1"
}

variable "ami_id" {
  description = "The AMI from which to launch the instance. If not supplied, resource will use its own default image"
  type        = string
  default     = "ami-0083e9407e333acf2"
}
