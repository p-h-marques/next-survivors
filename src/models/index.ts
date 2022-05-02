export enum EnumFilters {
  ALL = 'all survivors',
  INFECTED = 'infected survivors',
  CURED = 'cured survivors',
}

export interface ISurvivor {
  _id: string;
  name: string;
  age: number;
  isInfected: boolean;
  nationality: string;
  photo: string;
}

export interface IGlobalActions {
  type: string;
  payload: EnumFilters & string;
}

export interface IGlobalState {
  loading: boolean;
  error: boolean;
  filters: {
    input: string;
    select: EnumFilters;
  };
  data: ISurvivor[];
}
