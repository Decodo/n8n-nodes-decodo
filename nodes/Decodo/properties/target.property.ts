import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class TargetProperty {
  static property = {
    displayName: 'Target',
    name: 'target',
    description: 'Decodo Scraper API supported target',
    type: 'options',
    default: `${TARGET.UNIVERSAL}`,
    required: true,
    noDataExpression: true,
    options: [
      {
        name: 'Universal',
        value: TARGET.UNIVERSAL,
      },
      {
        name: 'Google Search',
        value: TARGET.GOOGLE_SEARCH,
      },
    ],
  } satisfies INodeProperties;
}
