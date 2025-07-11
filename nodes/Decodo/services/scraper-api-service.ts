import { IExecuteFunctions } from 'n8n-workflow';

export class ScraperApiService {
  static SERVICE_URL = 'http://localhost:5002/v2/scrape';

  static async scrape({
    n8n,
    userPass64,
    params,
  }: {
    n8n: IExecuteFunctions;
    userPass64: string;
    params: object;
  }) {
    const resBody = await n8n.helpers.httpRequestWithAuthentication.call(n8n, 'decodoApi', {
      url: this.SERVICE_URL,
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
