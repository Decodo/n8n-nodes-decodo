import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Decodo implements INodeType {
  description: INodeTypeDescription = {
    properties: [],
    displayName: 'Decodo',
    name: 'decodo',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'asdf',
    defaults: {
      name: 'Decodo',
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    usableAsTool: true,
    credentials: [
      {
        name: 'DecodoApi',
        required: true,
      },
    ],
    // requestDefaults: {
    //   baseURL: 'https://api.nasa.gov',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // },
  };
}
