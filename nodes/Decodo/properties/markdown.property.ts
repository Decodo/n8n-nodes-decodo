import { INodeProperties } from 'n8n-workflow';

export class MarkdownProperty {
  static description = 'Retrieve results in markdown.';

  static property = {
    displayName: 'Markdown',
    name: 'markdown',
    description: MarkdownProperty.description,
    type: 'boolean',
    default: false,
    required: true,
    displayOptions: {
      show: { headless: [false] },
    },
  } satisfies INodeProperties;
}
