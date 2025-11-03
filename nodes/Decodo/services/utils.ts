import { RedditSort } from '../types';

export class Utils {
  static getSubredditUrl = (subreddit: string, sort?: RedditSort) => {
    const baseUrl = `https://www.reddit.com/r/${subreddit}`;
    if (sort) {
      return `${baseUrl}/${sort}`;
    }
    return baseUrl;
  };
}
