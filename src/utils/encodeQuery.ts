/* eslint-disable nonblock-statement-body-position */
/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import { isValidValue } from './validation';

export const encodeQuery = (data: object) => {
  const ret = {};
  for (let d in data)
    if (data[d] !== '' && isValidValue(data[d])) {
      ret[d] = data[d];
    }
  return ret;
};
