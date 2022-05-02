import { EnumFilters, IFilters, IRequest } from '../models';

const url = 'http://localhost:3000/api/';

function getInfectedStatus(select: EnumFilters): boolean | undefined {
  const status = {
    [EnumFilters.ALL]: undefined,
    [EnumFilters.INFECTED]: 'true',
    [EnumFilters.CURED]: 'false',
  };

  return status[select] || undefined;
}

const defaultReturn = {
  data: [],
  loading: false,
  error: false,
};

export async function getSurvivors(filters: IFilters): Promise<IRequest> {
  const name = filters.input;
  const infected = getInfectedStatus(filters.select);
  const query = `?name=${name}&${
    infected !== undefined ? 'infected=' + infected : ''
  }`;

  try {
    const request = await fetch(url + 'survivors' + query);
    const response = await request.json();
    return { ...defaultReturn, data: response };
  } catch (error) {
    return { ...defaultReturn, error: true };
  }
}
