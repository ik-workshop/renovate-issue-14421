'use strict';

const Fs = require('fs');

if (!Fs.existsSync('repos.json')) {
  throw new Error('Missing enabled-repos.json - please create it by running "npm run generate-enabled".');
}

module.exports = {
  "platform": "github",
  "token": process.env.RENOVATE_TOKEN,
  "repositories": JSON.parse(Fs.readFileSync('repos.json', 'utf8')),
  "logLevel": process.env.LOG_LEVEL,
  "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
  "prConcurrentLimit": 0,
  "prHourlyLimit": 0,
  "pruneStaleBranches": true,
  "recreateClosed": true,
  "onboarding": false,
  "requireConfig": false,
  "baseBranches": ["master", "main"],
  "packageRules": [
    {
      "matchUpdateTypes": ["major", "minor", "patch", "pin", "digest"],
      "addLabels": [process.env.TEAM_LABEL]
    }
  ],
}
