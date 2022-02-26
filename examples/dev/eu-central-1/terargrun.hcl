# Set common variables for the region. This is automatically pulled in in the root terragrunt.hcl configuration to
# configure the remote state bucket and pass forward to the child modules as inputs.
locals {
  aws_region = "us-central-1"
  ami_id     = "ami-0083e9407e275acf2"
}

inputs = {
  aws_region  = "us-central-1"
  ami_id      = "ami-0083e9407e275acf2"
}
