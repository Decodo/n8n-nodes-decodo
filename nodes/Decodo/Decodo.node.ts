import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';
import { ScraperApiService } from './services/scraper-api-service';

export class Decodo implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Decodo',
    name: 'decodo',
    group: ['transform'],
    version: 1,
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
    properties: [
      {
        displayName: 'URL',
        name: 'url',
        type: 'string',
        default: "={{ $fromAI('url') }}",
        required: true,
        description: 'Target URL to scrape',
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const returnData: INodeExecutionData[] = [];

    // this whole thing is gonna be used as an ai tool
    // so i need to get the target and params from previous propts/steps

    const { username, password } = await this.getCredentials('decodoApi');
    const userPass64 = Buffer.from(`${username}:${password}`).toString('base64');

    const url = this.getNodeParameter('url', 0) as string;

    const resBody = await ScraperApiService.scrape({ n8n: this, userPass64, params: { url } });

    returnData.push({
      json: {
        data: resBody,
      },
    });

    return [this.helpers.returnJsonArray(returnData)];
  }
}
