import { EnumFilters, IRequest, ISurvivorDetails } from '../models';
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

export function loadingStatusUpdate(data: boolean) {
  return {
    type: types.LOADING_STATUS_UPDATE,
    payload: data,
  };
}

export function requestUpdate(data: IRequest) {
  return {
    type: types.REQUEST_UPDATE,
    payload: data,
  };
}

export function openSurvivorDetails(data: ISurvivorDetails) {
  return {
    type: types.OPEN_SURVIVOR_DETAILS,
    payload: data,
  };
}

export function closeSurvivorDetails() {
  return {
    type: types.CLOSE_SURVIVOR_DETAILS,
  };
}
