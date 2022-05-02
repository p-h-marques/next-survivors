import { INationality } from '../models';

const url = 'https://restcountries.com/v3.1/alpha/';

export async function getNationalityInfo(
  nationality: string,
): Promise<INationality> {
  try {
    const request = await fetch(url + nationality);
    const response = await request.json();

    const { name, flags } = response[0];

    return {
      name: name.common,
      flag: flags.svg,
    };
  } catch (error) {
    return {};
  }
}
