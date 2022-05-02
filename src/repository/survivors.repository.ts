import { EnumFilters, IFilters } from '../models';

const url = 'http://localhost:3000/api/';

function getInfectedStatus(select: EnumFilters): boolean | undefined {
  const status = {
    [EnumFilters.ALL]: undefined,
    [EnumFilters.INFECTED]: 'true',
    [EnumFilters.CURED]: 'false',
  };

  return status[select] || undefined;
}

export async function getSurvivors(filters: IFilters) {
  const name = filters.input;
  const infected = getInfectedStatus(filters.select);
  const query = `?name=${name}&${
    infected !== undefined ? 'infected=' + infected : ''
  }`;

  const request = await fetch(url + 'survivors' + query);
  const response = await request.json();

  console.log(response);
}
