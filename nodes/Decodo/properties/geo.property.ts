import { INodeProperties } from 'n8n-workflow';

export class GeoProperty {
  static property = {
    displayName: 'Geolocation',
    name: 'geo',
    description:
      'The country name from which the scraping request will be made. The first letter should be capitalized, e.g., "United States". If not specified, should be empty.',
    type: 'string',
    default: '',
    required: false,
  } satisfies INodeProperties;
}
