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
        action: 'Scrape using Google Search target',
      },
      {
        name: 'Amazon',
        value: TARGET.AMAZON,
        action: 'Scrape using Amazon target',
      },
      {
        name: 'YouTube Subtitles',
        value: TARGET.YOUTUBE_SUBTITLES,
        action: 'Scrape using YouTube Subtitles target',
      },
    ],
  } satisfies INodeProperties;
}
