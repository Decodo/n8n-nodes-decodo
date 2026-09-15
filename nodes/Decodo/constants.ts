export enum TARGET {
  UNIVERSAL = 'universal',
  GOOGLE_SEARCH = 'google_search',
  AMAZON = 'amazon',
  YOUTUBE_TRANSCRIPT = 'youtube_transcript',
  REDDIT_SUBDREDDIT = 'reddit_subreddit',
}

export const URL_TARGETS = [TARGET.UNIVERSAL, TARGET.AMAZON];
export const QUERY_TARGETS = [TARGET.GOOGLE_SEARCH];
export const HEADLESS_TARGETS = [TARGET.UNIVERSAL, TARGET.GOOGLE_SEARCH];
export const GEO_TARGETS = [
  TARGET.UNIVERSAL,
  TARGET.GOOGLE_SEARCH,
  TARGET.AMAZON,
  TARGET.REDDIT_SUBDREDDIT,
];
export const LOCALE_TARGETS = [TARGET.GOOGLE_SEARCH];
export const MARKDOWN_TARGETS = [TARGET.UNIVERSAL, TARGET.GOOGLE_SEARCH];
export const PARSE_TARGETS = [TARGET.GOOGLE_SEARCH, TARGET.AMAZON];

export enum AUTH_TYPE {
  TOKEN = 'token',
  API_KEY = 'apiKey',
}

export const API_BASE_URL: Record<AUTH_TYPE, string> = {
  [AUTH_TYPE.TOKEN]: 'https://scraper-api.decodo.com',
  [AUTH_TYPE.API_KEY]: 'https://data.decodo.com',
};

export const SCRAPE_PATH: Record<AUTH_TYPE, string> = {
  [AUTH_TYPE.TOKEN]: '/v2/scrape',
  [AUTH_TYPE.API_KEY]: '/v1/scrape',
};

export const INTEGRATION_HEADER = 'n8n';

export const AUTH_PROBE_URL = 'https://does-not-exist.decodo.com';
