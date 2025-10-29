import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class TargetProperty {
  static description = 'Decodo Scraper API supported target.';

  static property = {
    displayName: 'Target',
    name: 'target',
    description: TargetProperty.description,
    type: 'options',
    default: `${TARGET.UNIVERSAL}`,
    required: true,
    noDataExpression: true,
    options: [
      {
        name: 'Universal',
        value: TARGET.UNIVERSAL,
      },
    ],
  } satisfies INodeProperties;
}
