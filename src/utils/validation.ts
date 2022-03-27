import { isEmpty } from 'lodash';

export const isValidObject = (value) => {
  if (!isEmpty(value) && value !== null && value !== undefined) {
    return true;
  }
  return false;
};
export const isValidArray = (array) => {
  if (typeof array !== 'undefined' && array != null && array.length != null) {
    return true;
  }
  return false;
};
export const isValidValue = (value) => {
  if (value !== null && value !== undefined) {
    return true;
  }
  return false;
};
export const isValidString = (value) => {
  if (value !== null && value !== undefined && value.length > 0) {
    return true;
  }
  return false;
};
export const isValidNotEmptyArray = (array) => {
  if (
    typeof array !== 'undefined'
    && array != null
    && array.length != null
    && array.length > 0
  ) {
    return true;
  }
  return false;
};
