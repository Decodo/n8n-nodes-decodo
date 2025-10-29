import { INodeProperties } from 'n8n-workflow';
import { URL_TARGETS } from '../constants';

export class UrlProperty {
  static property = {
    displayName: 'URL',
    name: 'url',
    description: 'Target URL to scrape',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: {
        target: URL_TARGETS,
      },
    },
  } satisfies INodeProperties;
}
