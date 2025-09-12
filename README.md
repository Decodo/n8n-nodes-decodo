# n8n-nodes-decodo

This repo contains the source code for integrating [Decodo's Scraper API](https://decodo.com/scraping) with [n8n](https://n8n.io). The node supports scraping the contents of a target URL using Scraper API, which automcatically circumvents website blocks and bot protection.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## How to use

1. Obtain a Decodo Scraper API Web Advanced plan.

2. Fill in Decodo credentials in n8n (see below).

3. Start using the node.

## Obtaining a Decodo account

The node requires a Decodo Scraper API Web Advanced plan. Free trials available in [dashboard](https://dashboard.decodo.com/).

Once you have a plan activated, take a note of your generated authentication token:

<img src="docs/decodo_dashboard_auth.png">

## Seting up credentials on n8n

1. Open the credentials window on n8n:

<img src="docs/creds_01.png">

2. Create a new credential:

<img src="docs/creds_02.png" width="200px">

3. Find the Decodo Credentials API:

<img src="docs/creds_03.png">

4. Fill in your authentication token:

<img src="docs/n8n_auth.png">

## Using the node

The node is intended to be used as a tool for an AI agent. The most simple setup would look like this:

<img src="docs/n8n_setup.png">

With this setup, you can ask the agent to scrape a website in order to extract information.

As an example, if your AI model does not have access to the most recent web information, the following question may fail:

```
who won nba in 2025?
```

The question can be answered by updating the prompt with an instruction to scrape a reliable source:

```
scrape wikipedia and tell me who won nba in 2025
```

### Parameters

The following parameters are inferred automatically from messages:

| Parameter | Description                           				 | Example message                                                                         |
| --------- | -----------------------------------------------| --------------------------------------------------------------------------------------- |
| `url`     | The target URL to scrape              				 | Scrape wikipedia and tell me the article of the day.                                    |
| `geo`     | The country name from which to scrape          | Scrape https://ip.decodo.com/json and tell me what city did the request originate from. |
| `markdown`| Receive Markdown type responce instead of HTML | Scrape https://ip.decodo.com/json and return result in markdown format.                 |

## Development & Releases

To contribute to this node:

- Install n8n globally in your development machine.
- Pull and build this repo.
- Inside the project folder, run `npm link` after building to make your local build of `@decodo/n8n-nodes-decodo` available in the local npm registry.
- Inside `~/.n8n/nodes/node_modules/`, run `npm link @decodo/n8n-nodes-decodo`.

See this doc for more info: https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally

### Automated Releases

This project uses automated releases via GitHub Actions and semantic-release. When code is merged into the `main` branch, the following happens automatically:

1. **Semantic Analysis**: Commit messages are analyzed to determine the type of release (patch, minor, major)
2. **Version Bump**: The version in `package.json` is automatically updated
3. **NPM Publish**: The package is built and published to npm as `@decodo/n8n-nodes-decodo`
4. **GitHub Release**: A GitHub release is created with automatically generated release notes
5. **Git Tag**: A git tag is created for the new version

### Required Secrets

For automated releases to work, the following GitHub repository secrets must be configured:

- `NPM_TOKEN`: An npm access token with publish permissions for the `@decodo` organization
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions (no setup required)

### Commit Message Format

To trigger releases, use conventional commit messages:

- `feat: new feature` → Minor version bump
- `fix: bug fix` → Patch version bump
- `feat!: breaking change` or `BREAKING CHANGE:` in footer → Major version bump
- `docs:`, `style:`, `refactor:`, `test:`, `chore:` → No release

## Compatibility

Node has been developed and tested with:

- Node.js v22.17.0
- n8n nodes API version 1
- [n8n-workflow](https://www.npmjs.com/package/n8n-workflow) v1.82.0

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Decodo Scraper API documentation](https://help.decodo.com/docs/web-scraping-api-introduction)
