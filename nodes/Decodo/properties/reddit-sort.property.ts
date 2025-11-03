import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class RedditSortProperty {
  static property = {
    displayName: 'Sort',
    name: 'reddit_sort',
    description: 'How to sort the posts of the chosen subreddit',
    type: 'options',
    default: '',
    required: false,
    options: [
      { name: 'Best', value: 'best' },
      { name: 'Default', value: '' },
      { name: 'Hot', value: 'hot' },
      { name: 'New', value: 'new' },
      { name: 'Rising', value: 'rising' },
      { name: 'Top', value: 'top' },
    ],
    displayOptions: { show: { target: [TARGET.REDDIT_SUBDREDDIT] } },
  } satisfies INodeProperties;
}
