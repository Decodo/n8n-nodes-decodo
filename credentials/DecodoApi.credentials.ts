import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class DecodoApi implements ICredentialType {
  name = 'decodoApi';
  displayName = 'Decodo Credentials API';
  documentationUrl = 'https://help.decodo.com';
  properties: INodeProperties[] = [
    {
      displayName: 'Web Advanced username',
      name: 'username',
      type: 'string',
      default: '',
    },
    {
      displayName: 'Web Advanced password',
      name: 'password',
      type: 'string',
      default: '',
      typeOptions: {
        password: true,
      },
    },
  ];
}
