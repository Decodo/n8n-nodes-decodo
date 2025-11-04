import { INodeProperties } from 'n8n-workflow';
import { TARGET } from '../constants';

export class TargetProperty {
  static property = {
    displayName: 'Target',
    name: 'operation',
    description: 'Decodo Scraper API supported target',
    type: 'options',
    default: `${TARGET.UNIVERSAL}`,
    required: true,
    noDataExpression: true,
    options: [
      {
        name: 'Universal',
        value: TARGET.UNIVERSAL,
        action: 'Scrape using Universal target',
      },
      {
        name: 'Google Search',
        value: TARGET.GOOGLE_SEARCH,
        action: 'Scrape using Search target',
      },
      {
        name: 'Amazon',
        value: TARGET.AMAZON,
        action: 'Scrape using Amazon target',
      },
      {
        name: 'YouTube Transcript',
        value: TARGET.YOUTUBE_TRANSCRIPT,
        action: 'Scrape using YouTube Transcript target',
      },
      {
        name: 'Reddit Subreddit',
        value: TARGET.REDDIT_SUBDREDDIT,
        action: 'Scrape using Reddit Subreddit target',
      },
    ],
  } satisfies INodeProperties;
}
