# Renovate AWS Regions Support

In the meantime, Renovate does not support multiple regions. AWS has different resources in different region/location. From [the code](https://github.com/renovatebot/renovate/blob/f5cc1de36f7d6f3ce7d689a9b6675a930d81337c/lib/datasource/aws-machine-image/index.ts#L38) the region is supplied with environment variable e.g. AWS_REGION or AWS_DEFAULT_REGION. First of all, this is not documented. Second, there is no way to switch regions on the fly. Filters do no support regions, its an external value.

- [Issue](https://github.com/renovatebot/renovate/issues/14421)

---

![](https://img.shields.io/github/commit-activity/m/ik-workshop/renovate-issue-14421)
![](https://img.shields.io/github/last-commit/ik-workshop/renovate-issue-14421)
[![](https://img.shields.io/github/license/ivankatliarchuk/.github)](https://github.com/ivankatliarchuk/.github/LICENCE)
[![](https://img.shields.io/github/languages/code-size/ik-workshop/renovate-issue-14421)](https://github.com/ik-workshop/renovate-issue-14421)
[![](https://img.shields.io/github/repo-size/ik-workshop/renovate-issue-14421)](https://github.com/ik-workshop/renovate-issue-14421)
![](https://img.shields.io/github/languages/top/ik-workshop/renovate-issue-14421?color=green&logo=markdown&logoColor=blue)

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Example Configurations](#example-configurations)
  - [Example 1](#example-1)
  - [Example 2](#example-2)
  - [Example 3](#example-3)
  - [Example 4](#example-4)
  - [Extra Examples](#extra-examples)
- [Create](#create)
- [Resources](#resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## AWS Regions

- [AWS Regions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)

| Region            |
| :-------------- |
| `us-east-2`     |
| `us-east-1`     |
| `us-west-1`     |
| `us-west-2`     |
| `af-south-1`    |
| `ap-southeast-3`|
| `ap-east-1     `|
| `ap-northeast-3`|
| `eu-central-1  `|
| `eu-west-1`     |
| `eu-west-2`     |
| `eu-south-1`    |
| `eu-west-1`     |
| `eu-west-3`     |
| `eu-north-1`    |
| `me-south-1`    |
| `sa-east-1`     |

---

## Example Configurations

Folder structure. This does not reflect live example, it just combination of configs.

```tree
examples
├── dev
│   ├── eu-central-1
│   │   ├── terargrun.hcl
│   │   └── terraform.tfvars
│   └── eu-west-1
│       ├── terargrun.hcl
│       └── terraform.tfvars
├── infrastructure-manifest.json
├── infrastructure-manifest.yml
├── prod
├── values.yml
└── vars.tf
```

### Example 1

As per the [documentation](https://docs.renovatebot.com/modules/datasource/#aws-machine-image-datasource), there is no region

> At the mean time no clear which reagion is this

- [default](./examples/values.yml)

```
examples
├── values.yml
└── vars.tf
```

### Example 2

Region supplied within the path

- [region in path: 1](examples/dev/eu-central)
- [region in path: 2. Terragrunt dinamically reads it](examples/dev/eu-west-1/terargrun.hcl)

```tree
examples
├── dev
│   ├── eu-central-1
│   │   ├── terargrun.hcl
│   │   └── terraform.tfvars
│   └── eu-west-1
│       ├── terargrun.hcl
│       └── terraform.tfvars
```

### Example 3

Region is in the file itself

> Pretty much every terraform module support region as variable, so the input tfvars expects region

- [Region is in the file: 1](examples/dev/eu-central-1/terargrun.hcl)
- [Region is in the file: 2](examples/dev/eu-central-1/terraform.tfvars)

### Example 4

[Infrastructure Manifests](http://codyaray.com/2014/11/simplify-deployment-with-infrastructure-manifest)

> Files with mappings for common values

- [Infrastructure Manifest: 1](examples/infrastructure-manifest.json)
- [Infrastructure Manifest: 2](examples/infrastructure-manifest.yml)
- [Infrastructure Manifest: 3](examples/amis.yml)

```tree
examples
├── infrastructure-manifest.json
├── infrastructure-manifest.yml
├── amis.yml
```

### Example 5

Terraform `*vars*.tf` default values and `*vars*.tfvars`

```tree
examples
├── vars.tf
├── dev
│   ├── eu-central-1│ 
│   │   └── terraform.tfvars
```

- [vars.tf](examples/vars.tf)
- [terraform.tfvars](examples/dev/eu-central-1/terraform.tfvars)

### Extra Examples

- [Terragrunt live example](https://github.com/gruntwork-io/terragrunt-infrastructure-live-example)

---

## Create

[**Create a repository using this template →**][template.generate]

## Resources

- [Renovate: documentation](https://docs.renovatebot.com/)
- [Renovate: docs template fields](https://docs.renovatebot.com/templates/)

<!-- resources -->
[template.generate]: https://github.com/ik-workshop/renovate-issue-14421/generate
[code-style.badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square

[governance-badge]: https://github.com/ik-workshop/renovate-issue-14421/actions/workflows/governance.bot.yml/badge.svg
[governance-action]: https://github.com/ik-workshop/renovate-issue-14421/actions/workflows/governance.bot.yml

[governance.link-checker.badge]: https://github.com/ik-workshop/renovate-issue-14421/actions/workflows/governance.links-checker.yml/badge.svg
[governance.link-checker.status]: https://github.com/ik-workshop/renovate-issue-14421/actions/workflows/governance.links-checker.yml
