import {
  IAuthenticate,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';
import { API_BASE_URL, AUTH_PROBE_URL, AUTH_TYPE, SCRAPE_PATH, TARGET } from '../nodes/Decodo/constants';
import { detectAuthType } from '../nodes/Decodo/services/detect-auth-type';

const REJECTED_STATUSES: number[] = [];
for (let status = 401; status <= 599; status++) {
  REJECTED_STATUSES.push(status);
}

export class DecodoApi implements ICredentialType {
  name = 'decodoApi';
  displayName = 'Decodo Credentials API';
  documentationUrl = 'https://help.decodo.com/docs/web-scraping-api-introduction';
  properties: INodeProperties[] = [
    {
      displayName: 'Authentication Token',
      name: 'token',
      type: 'string',
      default: '',
      typeOptions: {
        password: true,
      },
    },
  ];

  authenticate: IAuthenticate = async (credentials, requestOptions) => {
    const value = String(credentials.token ?? '').trim();
    const authType = detectAuthType(value);

    if (!requestOptions.url) {
      requestOptions.baseURL = API_BASE_URL[authType];
      requestOptions.url = SCRAPE_PATH[authType];
    }

    requestOptions.headers = {
      ...requestOptions.headers,
      authorization:
        authType === AUTH_TYPE.API_KEY ? `Bearer ${value}` : `Basic ${value}`,
    };

    return requestOptions;
  };

  test: ICredentialTestRequest = {
    request: {
      url: '',
      method: 'POST',
      body: { target: TARGET.UNIVERSAL, url: AUTH_PROBE_URL },
      ignoreHttpStatusErrors: {
        ignore: true,
        except: REJECTED_STATUSES,
      } as unknown as boolean,
    },
    rules: [401, 403].map((value) => ({
      type: 'responseCode' as const,
      properties: { value, message: 'The Decodo API rejected these credentials.' },
    })),
  };
}
