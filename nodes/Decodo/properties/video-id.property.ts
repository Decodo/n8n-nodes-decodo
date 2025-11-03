import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class VideoIdProperty {
  static property = {
    displayName: 'Video ID',
    name: 'video_id',
    description: 'The video ID of the video you want to retreive the transcript from',
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: { target: [TARGET.YOUTUBE_TRANSCRIPT] },
    },
  } satisfies INodeProperties;
}
