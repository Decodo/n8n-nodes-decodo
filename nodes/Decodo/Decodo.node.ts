import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from 'n8n-workflow';
import { ScraperApiService } from './services/scraper-api-service';
import { PropertyHandler } from './services/parameter-transformer';

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
    properties: PropertyHandler.properties,
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const returnData: INodeExecutionData[] = [];

    const { token } = await this.getCredentials('decodoApi');

    const parameters = PropertyHandler.getParameters(
      this.getNodeParameter as (
        name: string,
        itemIndex: number,
        fallback?: unknown,
      ) => Record<string, unknown>,
    );
    const params = PropertyHandler.transformToScrapingParameters(parameters);

    const resBody = await ScraperApiService.scrape({
      n8n: this,
      creds: Decodo.CREDS,
      token,
      params,
    });

    returnData.push({
      json: {
        data: resBody,
      },
    });

    return [this.helpers.returnJsonArray(returnData)];
  }
}
