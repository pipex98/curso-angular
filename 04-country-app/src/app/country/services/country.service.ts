import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';

import type { RestCountry } from '../interfaces/rest-countries.interfaces';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);


  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    return this.http.get<RestCountry[]>(`${API_URL}/capital/${ query }`)
      .pipe(
        map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error => {
          console.log('Error fetching', error);
          return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {

    const url = `${API_URL}/name/${query}`

    query = query.toLocaleLowerCase();

    return this.http.get<RestCountry[]>(url)
    .pipe(
      map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp) ),
      delay(2000),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`))
      })
    );
  }

  searchByRegion(query: string): Observable<Country[]> {

    const url = `${API_URL}/region/${query}`;

    query = query.toLocaleLowerCase();

    return this.http.get<RestCountry[]>(url)
    .pipe(
      map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp) ),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`))
      })
    );
  }

  searchCountryByAlphaCode(code: string) {

    const url = `${API_URL}/alpha/${code}`;

    return this.http.get<RestCountry[]>(url)
    .pipe(
      map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp) ),
      map( countries => countries.at(0) ),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener paises con ese código ${code}`))
      })
    );
  }

}
