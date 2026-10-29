import { IExecuteFunctions } from 'n8n-workflow';
import { API_BASE_URL, AUTH_TYPE, INTEGRATION_HEADER, SCRAPE_PATH } from '../constants';

export class ScraperApiService {
  static async scrape({
    n8n,
    creds,
    authType,
    params,
  }: {
    n8n: IExecuteFunctions;
    creds: string;
    authType: AUTH_TYPE;
    params: object;
  }) {
    const resBody = await n8n.helpers.httpRequestWithAuthentication.call(n8n, creds, {
      url: `${API_BASE_URL[authType]}${SCRAPE_PATH[authType]}`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-integration': INTEGRATION_HEADER,
      },
      body: params,
    });

    if (resBody?.status === 'failed') {
      const code = resBody.status_code ? ` (${resBody.status_code})` : '';
      throw new Error(
        `Decodo could not scrape the target${code}: ${resBody.message ?? 'no reason given'}`,
      );
    }

    return resBody;
  }
}
