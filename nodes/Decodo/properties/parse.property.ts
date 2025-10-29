import { INodeProperties } from 'n8n-workflow';
import { PARSE_TARGETS } from '../constants';

export class ParseProperty {
  static property = {
    displayName: 'Parse',
    name: 'parse',
    description:
      'Whether to use dedicated parsers for certain target templates. To retrieve structured data, set parse parameter to true.',
    type: 'boolean',
    default: true,
    required: false,
    displayOptions: {
      show: { target: PARSE_TARGETS },
    },
  } satisfies INodeProperties;
}
