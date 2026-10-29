import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class SubtitleOriginProperty {
  static property = {
    displayName: 'Subtitle Origin',
    name: 'subtitle_origin',
    description:
      'Specifies whether to retrieve subtitles that are automatically generated or provided by the uploader',
    type: 'options',
    default: 'auto_generated',
    options: [
      { name: 'Automatically Generated', value: 'auto_generated' },
      { name: 'Uploader Provided', value: 'uploader_provided' },
    ],
    required: false,
    displayOptions: {
      show: { operation: [TARGET.YOUTUBE_SUBTITLES] },
    },
  } satisfies INodeProperties;
}
