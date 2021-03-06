import { EnumFilters, IFilters, IRequest, ISurvivor } from '../models';

const url = '/api/';

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

export async function editInfectedStatus(
  id: string,
  infected: boolean,
): Promise<ISurvivor | false> {
  try {
    const request = await fetch(url + id + '/infected?value=' + infected, {
      method: 'PUT',
    });
    const response = await request.json();
    return response;
  } catch (error) {
    return false;
  }
}
