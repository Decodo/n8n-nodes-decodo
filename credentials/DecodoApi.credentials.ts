import { ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class DecodoApi implements ICredentialType {
  name = 'decodoApi';
  displayName = 'Decodo Credentials API';
  documentationUrl = 'https://help.decodo.com/docs/web-scraping-api-introduction';
  properties: INodeProperties[] = [
    {
      displayName: 'Web Advanced basic auth token',
      name: 'token',
      type: 'string',
      default: '',
      typeOptions: {
        password: true,
      },
    },
  ];
  test: ICredentialTestRequest = {
    request: {
      baseURL: 'https://scraper-api.decodo.com',
      url: '/v1/stats',
      method: 'GET',
      headers: {
        authorization: '={{"Basic " + $credentials.token}}',
      },
    },
  };
}
