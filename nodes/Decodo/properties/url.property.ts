import { INodeProperties } from 'n8n-workflow';

export class UrlProperty {
  static property = {
    displayName: 'URL',
    name: 'url',
    type: 'string',
    default: "={{ $fromAI('url') }}",
    required: true,
    description: 'Target URL to scrape',
  } satisfies INodeProperties;
}
