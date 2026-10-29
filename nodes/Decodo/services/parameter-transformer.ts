import { INodeProperties, NodeParameterValueType } from 'n8n-workflow';
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
  SubtitleOriginProperty,
  LanguageCodeProperty,
} from '../properties';

export class PropertyHandler {
  static properties: INodeProperties[] = [
    TargetProperty.property,
    UrlProperty.property,
    QueryProperty.property,
    VideoIdProperty.property,
    HeadlessProperty.property,
    HeadlessProperty.offByDefaultProperty,
    ParseProperty.property,
    MarkdownProperty.property,
    MarkdownProperty.withoutParseProperty,
    SubtitleOriginProperty.property,
    LanguageCodeProperty.property,
    GeoProperty.property,
    LocaleProperty.property,
    LimitProperty.property,
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
      ...(params.query && { query: params.query }),
      ...(params.video_id && { query: params.video_id }),
      ...(params.headless && { headless: 'html' }),
      ...(params.parse && { parse: params.parse }),
      ...(params.geo && { geo: params.geo }),
      ...(params.locale && { locale: params.locale }),
      ...(params.subtitle_origin && { subtitle_origin: params.subtitle_origin }),
      ...(params.language_code && { language_code: params.language_code }),
      ...(params.results_limit && { limit: params.results_limit }),
      ...(params.markdown && { markdown: params.markdown }),
    };
  };
}
