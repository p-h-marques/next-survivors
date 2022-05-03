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
  payload: EnumFilters & string & boolean & IRequest & ISurvivorDetails;
}

export interface IFilters {
  input: string;
  select: EnumFilters;
}

export interface IRequest {
  loading: boolean;
  error: boolean;
  data: ISurvivor[];
}

export interface ISurvivorDetails {
  id: string;
  name: string;
  age: number;
  isInfected: boolean;
  photo: string;
  country?: string;
  flag?: string;
}

export interface IGlobalState extends IRequest {
  filters: IFilters;
  details: ISurvivorDetails | null;
}

export interface INationality {
  name?: string;
  flag?: string;
}
