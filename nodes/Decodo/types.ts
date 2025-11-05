import { TARGET } from './constants';

export type RedditSort = 'best' | 'hot' | 'new' | 'rising' | 'top';

export type ScraperApiParams = {
  operation?: TARGET;
  url?: string;
  query?: string;
  video_id?: string;
  headless?: boolean;
  parse?: boolean;
  geo?: string;
  locale?: string;
  transcript_origin?: 'auto_generated' | 'uploader_provided';
  language_code?: string;
  results_limit?: string;
  markdown?: boolean;
  subreddit?: string;
  reddit_sort?: RedditSort;
};
