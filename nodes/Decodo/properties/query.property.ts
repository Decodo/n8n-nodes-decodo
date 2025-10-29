import { INodeProperties } from 'n8n-workflow';
import { QUERY_TARGETS } from '../constants';

export class QueryProperty {
  static property = {
    displayName: 'Query',
    name: 'query',
    description: 'Target query to scrape',
    type: 'string',
    default: '',
    required: true,
    displayOptions: { show: { target: QUERY_TARGETS } },
  } satisfies INodeProperties;
}
