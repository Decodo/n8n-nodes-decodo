import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class TranscriptOriginProperty {
  static property = {
    displayName: 'Transcript Origin',
    name: 'transcript_origin',
    description:
      'Specifies whether to retrieve transcripts that are automatically generated or provided by the uploader',
    type: 'options',
    default: 'auto_generated',
    options: [
      { name: 'Automatically Generated', value: 'auto_generated' },
      { name: 'Uploader Provided', value: 'uploader_provided' },
    ],
    required: false,
    displayOptions: {
      show: { target: [TARGET.YOUTUBE_TRANSCRIPT] },
    },
  } satisfies INodeProperties;
}
