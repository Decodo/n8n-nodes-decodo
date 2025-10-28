import { INodeProperties } from 'n8n-workflow';
import { ScraperApiParams } from '../types';
import {
  TargetProperty,
  UrlProperty,
  GeoProperty,
  HeadlessProperty,
  MarkdownProperty,
} from '../properties';

export class PropertyHandler {
  static properties: INodeProperties[] = [
    TargetProperty.property,
    UrlProperty.property,
    GeoProperty.property,
    HeadlessProperty.property,
    MarkdownProperty.property,
  ];

  static getParameters = (
    getValue: (name: string, itemIndex: number, fallback?: unknown) => Record<string, unknown>,
  ): ScraperApiParams => {
    const out: Record<string, unknown> = {};

    for (const prop of PropertyHandler.properties) {
      const { name } = prop;
      out[name] = getValue(name, 0, prop.default);
    }

    return out;
  };

  static transformToScrapingParameters = (params: ScraperApiParams) => {
    const { target, url, query, headless, geo, markdown } = params;
    return {
      target,
      ...(url ? { url } : {}),
      ...(query ? { query } : {}),
      ...(headless ? { headless: 'html' } : {}),
      ...(geo ? { geo } : {}),
      ...(markdown ? { markdown } : {}),
    };
  };
}
