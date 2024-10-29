import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const isNotEmpty = string => string !== '';

export const isValidDate = string => {
  return dayjs(string, 'YYYY-MM-DD', true).isValid();
};

export const isValidURL = string => {
  try {
    new URL(string);
    return true;
  } catch (e) {
    return false;
  }
};
