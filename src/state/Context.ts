import { createContext } from 'react';
import { EnumFilters, IGlobalState } from '../models';

const Context = createContext(null);

export default Context;

export const initialState: IGlobalState = {
  loading: false,
  error: false,
  filters: {
    input: '',
    select: EnumFilters.ALL,
  },
  data: [],
  details: null,
};
