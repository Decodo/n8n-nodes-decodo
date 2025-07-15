import { IExecuteFunctions } from 'n8n-workflow';

export class ScraperApiService {
  static SERVICE_URL_PROD = 'https://scraper-api.decodo.com/v2/scrape';

  static async scrape({
    n8n,
    creds,
    userPass64,
    params,
  }: {
    n8n: IExecuteFunctions;
    creds: string;
    userPass64: string;
    params: object;
  }) {
    const resBody = await n8n.helpers.httpRequestWithAuthentication.call(n8n, creds, {
      url: this.SERVICE_URL_PROD,
      method: 'POST',
      headers: {
        authorization: `Basic ${userPass64}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: params,
    });

    return resBody;
  }
}
