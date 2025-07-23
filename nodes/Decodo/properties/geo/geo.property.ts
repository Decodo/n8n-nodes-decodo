import { INodeProperties } from 'n8n-workflow';

export class GeoProperty {
  static desciption: 'The country name from which the scraping request will be made. The first letter should be capitalized, e.g., "United States". If not specified, should be empty.';

  static property = {
    displayName: 'Geolocation',
    name: 'geo',
    type: 'string',
    default: `={{ $fromAI('geo', 'The country name from which the scraping request will be made. The first letter should be capitalized, e.g., "United States". If not specified, should be empty.', 'string', '') }}`,
    required: false,
    description: GeoProperty.desciption,
  } satisfies INodeProperties;
}
