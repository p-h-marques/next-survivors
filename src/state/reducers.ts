import { IGlobalActions, IGlobalState } from '../models';
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

    default:
      throw new Error();
  }
}

export default reducer;
