import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class VideoIdProperty {
  static property = {
    displayName: 'Video ID',
    name: 'video_id',
    description: 'The video ID of the video you want to retrieve the subtitles from',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: { operation: [TARGET.YOUTUBE_SUBTITLES] },
    },
  } satisfies INodeProperties;
}
