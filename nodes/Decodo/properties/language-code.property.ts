import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class LanguageCodeProperty {
  static property = {
    displayName: 'Language Code',
    name: 'language_code',
    description:
      'Specifies the language of the transcript, ex: `en`. If the video does not have a transcript matching the language code, HTTP 404 will be returned.',
    type: 'string',
    default: '',
    required: true,
    displayOptions: { show: { target: [TARGET.YOUTUBE_TRANSCRIPT] } },
  } satisfies INodeProperties;
}
