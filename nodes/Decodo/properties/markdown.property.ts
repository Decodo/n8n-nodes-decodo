import { INodeProperties } from 'n8n-workflow';

export class MarkdownProperty {
  static property = {
    displayName: 'Markdown',
    name: 'markdown',
    type: 'boolean',
    default: true,
    required: true,
    description: 'Whether results are transformed into markdown',
  } satisfies INodeProperties;
}
