import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

import { ListComponent } from "../../components/list/list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  imports: [ListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {

      if ( !request.query ) return of([]);

      this.router.navigate(['/country/by-capital'], {
        queryParams: {
          query: request.query
        }
      });

      return this.countryService.searchByCapital(request.query)
    }
  });


  // countryResource = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async({ request }) => {

  //     if ( !request.query ) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     )
  //   }
  // });

  // isLoading = signal(false);
  // isError = signal<string|null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query:string) {

  //   if ( this.isLoading() ) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital( query )
  //   .subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false)
  //       this.countries.set([])
  //       this.isError.set(err)
  //     }
  //   });
  // };
};
