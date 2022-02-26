'use strict';

const Fs = require('fs');

if (!Fs.existsSync('repos.json')) {
  throw new Error('Missing enabled-repos.json - please create it by running "npm run generate-enabled".');
}

const enableManagers = ["regex"]

module.exports = {
  "platform": "github",
  "token": process.env.RENOVATE_TOKEN,
  "repositories": JSON.parse(Fs.readFileSync('repos.json', 'utf8')),
  "logLevel": process.env.LOG_LEVEL,
  "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
  "prConcurrentLimit": 0,
  "prHourlyLimit": 0,
  "pruneStaleBranches": false,
  "recreateClosed": false,
  "onboarding": false,
  "requireConfig": false,
  "baseBranches": ["master", "main"],
  "packageRules": [
    {
      "matchUpdateTypes": ["major", "minor", "patch", "pin", "digest"],
      "addLabels": ["{{depType}}", "{{datasource}}", "{{updateType}}"]
    }
  ],
  "regexManagers": [
    {
      "fileMatch": ['helm-release\.yaml'],
      "matchStrings": [
        "chart:\n *repository: (?<registryUrl>.*?)\n *name: (?<depName>.*?)\n *version: (?<currentValue>.*)\n"
      ],
      "datasourceTemplate": "helm"
    },
    {
      "fileMatch": ['dev\.env'],
      "matchStrings": [
        "^#\\s*renovate:\\s*repository=(?<registryUrl>.*?)\\s*depName=(?<depName>.*?)\n.*?_HELM_CHART_VERSION=\"(?<currentValue>.*)\""
      ],
      "datasourceTemplate": "helm"
    },
  ],
  "enabledManagers": enableManagers,
}
