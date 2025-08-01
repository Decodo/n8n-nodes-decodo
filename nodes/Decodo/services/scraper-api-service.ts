import { CredentialInformation, IExecuteFunctions } from 'n8n-workflow';

export class ScraperApiService {
  static SERVICE_URL_PROD = 'https://scraper-api.decodo.com/v2/scrape';

  static async scrape({
    n8n,
    creds,
    token,
    params,
  }: {
    n8n: IExecuteFunctions;
    creds: string;
    token: CredentialInformation;
    params: object;
  }) {
    const body = {
      ...params,
      markdown: true,
    };

    const resBody = await n8n.helpers.httpRequestWithAuthentication.call(n8n, creds, {
      url: this.SERVICE_URL_PROD,
      method: 'POST',
      headers: {
        authorization: `Basic ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-integration': 'n8n',
      },
      body,
    });

    return resBody;
  }
}
