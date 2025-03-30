import type { Country } from "../country/interfaces/country.interface";
import type { RestCountry } from "../country/interfaces/rest-countries.interfaces";


export class CountryMapper {

  // static RestCountry => Country
  static mapRestCountryToCountry( restCountry: RestCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      capital: restCountry.capital?.join(','),
      population: restCountry.population,
      region: restCountry.region,
      subregion: restCountry.subregion
    };
  }

  // static RestCountry[] => Country[]
  static mapRestCountryArrayToCountryArray( restCountries: RestCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry)
  }
}
