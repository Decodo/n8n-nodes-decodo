import { AUTH_TYPE } from '../constants';

const PRINTABLE_ASCII = /^[\x20-\x7e]+$/;

export const detectAuthType = (value: string): AUTH_TYPE => {
  const decoded = Buffer.from(value, 'base64').toString('utf8');

  return PRINTABLE_ASCII.test(decoded) && decoded.includes(':')
    ? AUTH_TYPE.TOKEN
    : AUTH_TYPE.API_KEY;
};
