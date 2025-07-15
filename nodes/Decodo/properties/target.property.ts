import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../targets/constants';

export const targetProperty = {
  displayName: 'Target',
  description: 'Decodo Scraper API supported target',
  name: 'target',
  type: 'options',
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
  default: `${TARGET.UNIVERSAL}`,
} satisfies INodeProperties;
