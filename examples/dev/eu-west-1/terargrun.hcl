# The region value read from path in this case
locals {
  path       = path_relative_to_include()
  path_split = split("/", local.path)
  component  = local.path_split[0]
  account    = local.path_split[2]
  region     = local.path_split[3]
  ami_id     = "ami-0083e9407e275aee2"
}

inputs = {
  aws_region  = local.region
  ami_id      = "ami-0083e9407e275eef2"
}
