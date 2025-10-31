import { INodeProperties } from 'n8n-workflow';
import { ScraperApiParams } from '../types';
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
} from '../properties';

export class PropertyHandler {
  static properties: INodeProperties[] = [
    TargetProperty.property,
    UrlProperty.property,
    QueryProperty.property,
    VideoIdProperty.property,
    HeadlessProperty.property,
    ParseProperty.property,
    TranscriptOriginProperty.property,
    LanguageCodeProperty.property,
    GeoProperty.property,
    LocaleProperty.property,
    LimitProperty.property,
    MarkdownProperty.property,
  ];

  static getParameters = (
    getValue: (name: string, itemIndex: number, fallback?: unknown) => Record<string, unknown>,
  ): ScraperApiParams => {
    const out: Record<string, unknown> = {};

    for (const prop of PropertyHandler.properties) {
      const { name, type } = prop;
      const fallback = type === 'boolean' ? false : prop.default;
      out[name] = getValue(name, 0, fallback);
    }

    return out;
  };

  static transformToScrapingParameters = (params: ScraperApiParams) => {
    return {
      target: params.target,
      ...(params.url && { url: params.url }),
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
