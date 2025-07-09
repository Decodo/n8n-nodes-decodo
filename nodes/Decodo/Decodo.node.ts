import axios from 'axios';
import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';

export class Decodo implements INodeType {
  description: INodeTypeDescription = {
    properties: [],
    displayName: 'Decodo',
    name: 'decodo',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'asdf',
    icon: 'file:decodo.svg',
    defaults: {
      name: 'Decodo',
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    usableAsTool: true,
    credentials: [
      {
        name: 'decodoApi',
        required: true,
      },
    ],
    requestDefaults: {
      baseURL: 'https://scraper-api.decodo.com/v2/scrape',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    console.log('asdf');

    // this whole thing is gonna be used as an ai tool
    // so i need to get the target and params from previous propts/steps

    const { username, password } = await this.getCredentials('decodoApi');
    const userPass64 = Buffer.from(`${username}:${password}`).toString('base64');

    const res = await axios.request({
      url: 'https://scraper-api.decodo.com/v2/scrape',
      headers: {
        authorization: `Basic ${userPass64}`,
      },
      data: {},
    });

    return res.data;
  }
}
