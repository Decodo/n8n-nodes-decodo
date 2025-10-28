import { INodeProperties } from 'n8n-workflow';
import { QUERY_TARGETS } from '../targets/constants';

export const queryProperty = {
  displayName: 'Query',
  name: 'query',
  type: 'string',
  default: '',
  displayOptions: { show: { target: QUERY_TARGETS } },
  required: false,
} satisfies INodeProperties;
