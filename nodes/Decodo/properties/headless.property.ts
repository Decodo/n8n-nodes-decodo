import { INodeProperties } from 'n8n-workflow';
import { HEADLESS_TARGETS } from '../constants';

export class HeadlessProperty {
  static property = {
    displayName: 'JS Rendering',
    name: 'headless',
    description: 'Whether pages are allowed to render content dynamically using javascript',
    type: 'boolean',
    default: true,
    required: true,
    displayOptions: { show: { target: HEADLESS_TARGETS } },
  } satisfies INodeProperties;
}
