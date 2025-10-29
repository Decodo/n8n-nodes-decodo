import { INodeProperties } from 'n8n-workflow';

export class MarkdownProperty {
  static property = {
    displayName: 'Markdown',
    name: 'markdown',
    description: 'Whether results are retrieved in markdown',
    type: 'boolean',
    default: false,
    required: true,
    displayOptions: {
      show: { headless: [false] },
    },
  } satisfies INodeProperties;
}
