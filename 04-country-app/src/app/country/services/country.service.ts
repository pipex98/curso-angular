import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';

import type { RestCountry } from '../interfaces/rest-countries.interfaces';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../../mappers/country.mapper';
import { Region } from '../interfaces/region.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<Region, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    if ( this.queryCacheCapital.has(query) ) {
      return of( this.queryCacheCapital.get(query) ?? [] );
    }

    // console.log(`Llegando al servidor por ${query}`);

    return this.http.get<RestCountry[]>(`${API_URL}/capital/${ query }`)
      .pipe(
        map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap(( countries ) => this.queryCacheCapital.set(query, countries)),
        catchError(error => {
          console.log('Error fetching', error);
          return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {

    const url = `${API_URL}/name/${query}`

    query = query.toLocaleLowerCase();

    if ( this.queryCacheCountry.has(query) ) {
      return of( this.queryCacheCountry.get(query) ?? [] );
    }

    // console.log(`Llegando al servidor por ${query}`);

    return this.http.get<RestCountry[]>(url)
    .pipe(
      map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp) ),
      tap(( countries ) => this.queryCacheCountry.set(query, countries)),
      delay(2000),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener paises con ese query ${query}`))
      })
    );
  }

  searchByRegion(region: Region): Observable<Country[]> {

    const url = `${API_URL}/region/${region}`;

    if ( this.queryCacheRegion.has(region) ) {
      return of( this.queryCacheRegion.get(region) ?? [] )
    }

    // console.log(`Llegando al servidor por ${region}`);

    return this.http.get<RestCountry[]>(url)
    .pipe(
      map( (resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp) ),
      tap(( countries ) => this.queryCacheRegion.set(region, countries)),
      catchError(error => {
        console.log('Error fetching', error);
        return throwError(() => new Error(`No se pudo obtener paises con ese query ${region}`))
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
