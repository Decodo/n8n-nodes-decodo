import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class LimitProperty {
  static property = {
    displayName: 'Results Amount',
    name: 'results_limit',
    description: 'Number of results to retrieve in each page',
    type: 'number',
    default: 10,
    required: false,
    typeOptions: {
      minValue: 1,
      maxValue: 100,
    },
    displayOptions: {
      show: { target: [TARGET.GOOGLE_SEARCH] },
    },
  } satisfies INodeProperties;
}
