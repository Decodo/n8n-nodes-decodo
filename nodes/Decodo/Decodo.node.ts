import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';
import { ScraperApiService } from './services/scraper-api-service';
import { urlProperty } from './properties';

export class Decodo implements INodeType {
  static NAME = 'Decodo';

  static CREDS = 'decodoApi';

  description: INodeTypeDescription = {
    displayName: Decodo.NAME,
    name: 'decodo',
    group: ['transform'],
    version: 1,
    description: "Decodo's Scraper API",
    icon: 'file:decodo.svg',
    defaults: {
      name: Decodo.NAME,
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    usableAsTool: true,
    credentials: [
      {
        name: Decodo.CREDS,
        required: true,
      },
    ],
    properties: [urlProperty],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const returnData: INodeExecutionData[] = [];

    const { username, password } = await this.getCredentials('decodoApi');
    const userPass64 = Buffer.from(`${username}:${password}`).toString('base64');

    const url = this.getNodeParameter('url', 0) as string;

    const resBody = await ScraperApiService.scrape({
      n8n: this,
      creds: Decodo.CREDS,
      userPass64,
      params: { url },
    });

    returnData.push({
      json: {
        data: resBody,
      },
    });

    return [this.helpers.returnJsonArray(returnData)];
  }
}
