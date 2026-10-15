import {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
  NodeOperationError,
} from 'n8n-workflow';
import { ScraperApiService } from './services/scraper-api-service';
import { detectAuthType } from './services/detect-auth-type';
import { PropertyHandler } from './services/parameter-transformer';
import { TargetProperty } from './properties/target.property';

// n8n injects the "Custom API Call" option into `operation` at runtime, so it is not in TargetProperty.
const TARGET_NAMES = {
  ...Object.fromEntries(TargetProperty.property.options.map(({ value, name }) => [value, name])),
  __CUSTOM_API_CALL__: 'Custom API Call',
};

export class Decodo implements INodeType {
  static NAME = 'Decodo';

  static CREDS = 'decodoApi';

  description: INodeTypeDescription = {
    displayName: Decodo.NAME,
    name: 'decodo',
    group: ['transform'],
    version: 1,
    description: "Decodo's Web Scraping API",
    icon: 'file:decodo.svg',
    subtitle: `={{ (${JSON.stringify(TARGET_NAMES)})[$parameter["operation"]] }}`,
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
    const items = this.getInputData();

    const { token } = await this.getCredentials(Decodo.CREDS);
    const resolvedAuthType = detectAuthType(String(token ?? '').trim());

    for (let i = 0; i < items.length; i++) {
      try {
        const nodeParameters = PropertyHandler.getParametersWithFallback({
          getNodeParameters: this.getNodeParameter,
          index: i,
        });
        const scrapingParameters = PropertyHandler.transformToScrapingParameters(nodeParameters);

        const responseBody = await ScraperApiService.scrape({
          n8n: this,
          creds: Decodo.CREDS,
          authType: resolvedAuthType,
          params: scrapingParameters,
        });

        returnData.push({ json: responseBody, pairedItem: i });
      } catch (error) {
        if (this.continueOnFail()) {
          returnData.push({ json: { error: error.message }, pairedItem: i });
        } else {
          throw new NodeOperationError(this.getNode(), error, { itemIndex: i });
        }
      }
    }

    return [returnData];
  }
}
