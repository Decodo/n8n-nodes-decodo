import { INodeProperties } from 'n8n-workflow';
import { HEADLESS_TARGETS } from '../constants';

export class HeadlessProperty {
  static description =
    'Some pages may use javascript to load content dynamically, to enable this, turn on JS Rendering.';

  static property = {
    displayName: 'JS Rendering',
    name: 'headless',
    description: HeadlessProperty.description,
    type: 'boolean',
    default: true,
    required: true,
    displayOptions: { show: { target: HEADLESS_TARGETS } },
  } satisfies INodeProperties;
}
