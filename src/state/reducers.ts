import {
  IGlobalActions,
  IGlobalState,
  IRequest,
  ISurvivorDetails,
} from '../models';
import * as types from './types';

function reducer(state: IGlobalState, action: IGlobalActions) {
  switch (action.type) {
    case types.FILTER_SELECT_UPDATE:
      return {
        ...state,
        filters: {
          ...state.filters,
          select: action.payload,
        },
      };

    case types.FILTER_INPUT_UPDATE:
      return {
        ...state,
        filters: {
          ...state.filters,
          input: action.payload,
        },
      };

    case types.LOADING_STATUS_UPDATE:
      return {
        ...state,
        loading: action.payload,
      };

    case types.REQUEST_UPDATE:
      const payload = action.payload as IRequest;

      return {
        ...state,
        data: [],
        ...payload,
      };

    case types.OPEN_SURVIVOR_DETAILS:
      const payloadDetails = action.payload as ISurvivorDetails;

      return {
        ...state,
        details: {
          ...payloadDetails,
        },
      };

    case types.CLOSE_SURVIVOR_DETAILS:
      return {
        ...state,
        details: null,
      };

    case types.UPDATE_SURVIVOR_DETAILS:
      return {
        ...state,
        details: {
          ...state.details,
          isInfected: action.payload,
        },
      };

    default:
      throw new Error();
  }
}

export default reducer;
