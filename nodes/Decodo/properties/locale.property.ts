import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class LocaleProperty {
  static property = {
    displayName: 'Locale',
    name: 'locale',
    description:
      'This will change the search page web interface language (not the results). Example: – en-US – en-GB.',
    type: 'string',
    default: '',
    required: false,
    displayOptions: {
      show: { target: [TARGET.GOOGLE_SEARCH] },
    },
  } satisfies INodeProperties;
}
