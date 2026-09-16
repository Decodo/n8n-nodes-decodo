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

    return resBody;
  }
}
