# Renovate AWS Regions Support

In the meantime, Renovate does not support multiple regions. AWS has different resources in different region/location. From [the code](https://github.com/renovatebot/renovate/blob/f5cc1de36f7d6f3ce7d689a9b6675a930d81337c/lib/datasource/aws-machine-image/index.ts#L38) the region is supplied with environment variable e.g. AWS_REGION or AWS_DEFAULT_REGION. First of all, this is not documented. Second, there is no way to switch regions on the fly. Filters do no support regions, its an external value.

- [Issue](https://github.com/renovatebot/renovate/issues/14421)
- [MR](https://github.com/renovatebot/renovate/pulls)

---

![](https://img.shields.io/github/commit-activity/m/ik-workshop/renovate-issue-14421)
![](https://img.shields.io/github/last-commit/ik-workshop/renovate-issue-14421)
[![](https://img.shields.io/github/license/ivankatliarchuk/.github)](https://github.com/ivankatliarchuk/.github/LICENCE)
[![](https://img.shields.io/github/languages/code-size/ik-workshop/renovate-issue-14421)](https://github.com/ik-workshop/renovate-issue-14421)
[![](https://img.shields.io/github/repo-size/ik-workshop/renovate-issue-14421)](https://github.com/ik-workshop/renovate-issue-14421)
![](https://img.shields.io/github/languages/top/ik-workshop/renovate-issue-14421?color=green&logo=markdown&logoColor=blue)

---

[![governance][governance-badge]][governance-action]
[![governance.link-checker][governance.link-checker.badge]][governance.link-checker.status]

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Create](#create)
- [Resources](#resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

## Example Configurations

### Example 1

TODO

> TODO

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
