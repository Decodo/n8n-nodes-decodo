import { ScraperApiParams } from '../types';

export class ParameterTransformer {
  static transform = ({ url, geo, markdown }: ScraperApiParams) => {
    return { url, ...(geo && { geo }), ...(markdown && { markdown }) };
  };
}
