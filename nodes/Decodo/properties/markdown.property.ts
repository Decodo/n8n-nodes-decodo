import { INodeProperties } from 'n8n-workflow';
import { MARKDOWN_TARGETS, PARSE_TARGETS } from '../constants';

export class MarkdownProperty {
  static property = {
    displayName: 'Markdown',
    name: 'markdown',
    description: 'Whether results are retrieved in markdown',
    type: 'boolean',
    default: false,
    required: true,
    displayOptions: {
      show: { operation: MARKDOWN_TARGETS.filter((target) => !PARSE_TARGETS.includes(target)) },
    },
  } satisfies INodeProperties;

  static withoutParseProperty = {
    ...MarkdownProperty.property,
    displayOptions: {
      show: {
        operation: MARKDOWN_TARGETS.filter((target) => PARSE_TARGETS.includes(target)),
        parse: [false],
      },
    },
  } satisfies INodeProperties;
}
