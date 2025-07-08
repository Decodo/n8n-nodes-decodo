import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class DecodoApi implements ICredentialType {
  name = 'DecodoApi';
  displayName = 'Decodo credentials';
  documentationUrl =
    'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      default: '',
    },
  ];
}
