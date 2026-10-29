import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class LanguageCodeProperty {
  static property = {
    displayName: 'Language Code',
    name: 'language_code',
    description:
      'Specifies the language of the subtitles, ex: `en`. Leave empty to get every available language. If the video does not have subtitles matching the language code, HTTP 404 will be returned.',
    type: 'string',
    default: '',
    required: false,
    displayOptions: { show: { operation: [TARGET.YOUTUBE_SUBTITLES] } },
  } satisfies INodeProperties;
}
