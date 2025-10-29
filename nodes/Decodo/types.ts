import { TARGET } from './constants';

export type ScraperApiParams = {
  target?: TARGET;
  url?: string;
  query?: string;
  headless?: boolean;
  parse?: boolean;
  geo?: string;
  locale?: string;
  results_limit?: string;
  markdown?: boolean;
};
