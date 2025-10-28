import { TARGET } from './constants';

export type ScraperApiParams = {
  target?: TARGET;
  url?: string;
  query?: string;
  headless?: boolean;
  geo?: string;
  markdown?: boolean;
};
