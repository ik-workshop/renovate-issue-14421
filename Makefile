SHELL = /bin/sh -o pipefail
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

CI_RENOVATE_IMAGE := renovate/renovate:31.89-slim
LOG_LEVEL := debug

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: ## Setup dependencies
	@brew bundle

hooks: ## install pre commit.
	@pre-commit install
	@pre-commit gc
	@pre-commit autoupdate

validate: ## Validate files with pre-commit hooks
	@pre-commit run --all-files

run: ## Run renovate locally name=ex5
	@docker run --rm -it \
		-e RENOVATE_TOKEN \
		-e LOG_LEVEL=$(LOG_LEVEL) \
		-v ${PWD}/.cache:/tmp/renovate \
		-v ${PWD}/config-$(name).js:/usr/src/app/config.js \
		-v ${PWD}/repos.json:/usr/src/app/repos.json \
		$(CI_RENOVATE_IMAGE) renovate --dry-run=false

example1: ## Run example 1
	@$(MAKE) run name=ex1

example2: ## Run example 2 with custom empty label
	@$(MAKE) run name=ex2

example3: ## Run example 3 enchanced version of ex2
	@$(MAKE) run name=ex3
