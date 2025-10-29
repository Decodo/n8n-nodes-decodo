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
} from '../properties';

export class PropertyHandler {
  static properties: INodeProperties[] = [
    TargetProperty.property,
    UrlProperty.property,
    QueryProperty.property,
    HeadlessProperty.property,
    ParseProperty.property,
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
      ...(params.url ? { url: params.url } : {}),
      ...(params.query ? { query: params.query } : {}),
      ...(params.headless ? { headless: 'html' } : {}),
      ...(params.parse ? { parse: params.parse } : {}),
      ...(params.geo ? { geo: params.geo } : {}),
      ...(params.locale ? { locale: params.locale } : {}),
      ...(params.results_limit ? { limit: params.results_limit } : {}),
      ...(params.markdown ? { markdown: params.markdown } : {}),
    };
  };
}
