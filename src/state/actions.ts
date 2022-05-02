import { EnumFilters } from '../models';
import * as types from './types';

export function filterSelectUpdate(data: EnumFilters) {
  return {
    type: types.FILTER_SELECT_UPDATE,
    payload: data,
  };
}

export function filterInputUpdate(data: string) {
  return {
    type: types.FILTER_INPUT_UPDATE,
    payload: data,
  };
}
