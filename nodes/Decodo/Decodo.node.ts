import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';
import { ScraperApiService } from './services/scraper-api-service';
import { UrlProperty } from './properties';
import { GeoProperty } from './properties/geo/geo.property';

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
    properties: [UrlProperty.property, GeoProperty.property],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const returnData: INodeExecutionData[] = [];

    const { token } = await this.getCredentials('decodoApi');

    const url = this.getNodeParameter('url', 0) as string;
    const geo = this.getNodeParameter('geo', 0) as string;

    const resBody = await ScraperApiService.scrape({
      n8n: this,
      creds: Decodo.CREDS,
      token,
      params: { url, ...(geo && { geo }) },
    });

    returnData.push({
      json: {
        data: resBody,
      },
    });

    return [this.helpers.returnJsonArray(returnData)];
  }
}
