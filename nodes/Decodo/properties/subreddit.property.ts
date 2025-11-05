import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class SubredditProperty {
  static property = {
    displayName: 'Subreddit',
    name: 'subreddit',
    description: "Name of the subreddit, example: 'nba'",
    type: 'string',
    default: '',
    required: true,
    displayOptions: {
      show: { operation: [TARGET.REDDIT_SUBDREDDIT] },
    },
  } satisfies INodeProperties;
}
