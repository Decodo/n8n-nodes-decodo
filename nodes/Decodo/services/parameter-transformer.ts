import { INodeProperties, NodeParameterValueType } from 'n8n-workflow';
import { ScraperApiParams } from '../types';
import { Utils } from './utils';
import {
  TargetProperty,
  UrlProperty,
  GeoProperty,
  HeadlessProperty,
  MarkdownProperty,
  LocaleProperty,
  ParseProperty,
  LimitProperty,
  QueryProperty,
  VideoIdProperty,
  TranscriptOriginProperty,
  LanguageCodeProperty,
  SubredditProperty,
  RedditSortProperty,
} from '../properties';

export class PropertyHandler {
  static properties: INodeProperties[] = [
    TargetProperty.property,
    UrlProperty.property,
    QueryProperty.property,
    VideoIdProperty.property,
    SubredditProperty.property,
    HeadlessProperty.property,
    ParseProperty.property,
    TranscriptOriginProperty.property,
    LanguageCodeProperty.property,
    GeoProperty.property,
    LocaleProperty.property,
    LimitProperty.property,
    MarkdownProperty.property,
    RedditSortProperty.property,
  ];

  static getParametersWithFallback = ({
    getNodeParameters,
    index,
  }: {
    getNodeParameters: (
      name: string,
      itemIndex: number,
      fallback?: unknown,
    ) => NodeParameterValueType | object | undefined;
    index: number;
  }): ScraperApiParams => {
    const out: Record<string, unknown> = {};

    for (const prop of PropertyHandler.properties) {
      const { name, type } = prop;
      const fallback = type === 'boolean' ? false : prop.default;
      out[name] = getNodeParameters(name, index, fallback);
    }

    return out;
  };

  static transformToScrapingParameters = (params: ScraperApiParams) => {
    return {
      target: params.operation,
      ...(params.url && { url: params.url }),
      ...(params.subreddit && { url: Utils.getSubredditUrl(params.subreddit, params.reddit_sort) }),
      ...(params.query && { query: params.query }),
      ...(params.video_id && { query: params.video_id }),
      ...(params.headless && { headless: 'html' }),
      ...(params.parse && { parse: params.parse }),
      ...(params.geo && { geo: params.geo }),
      ...(params.locale && { locale: params.locale }),
      ...(params.transcript_origin && { transcript_origin: params.transcript_origin }),
      ...(params.language_code && { language_code: params.language_code }),
      ...(params.results_limit && { limit: params.results_limit }),
      ...(params.markdown && { markdown: params.markdown }),
    };
  };
}
