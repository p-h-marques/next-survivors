import { EnumFilters } from '../models';
import * as types from './types';

export function filterSelectUpdate(data: EnumFilters) {
  return {
    type: types.FILTER_SELECT_UPDATE,
    payload: data,
  };
}
