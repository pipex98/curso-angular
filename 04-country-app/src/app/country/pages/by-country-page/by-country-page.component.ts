import { Component, inject,  signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryService } from '../../services/country.service';
import { ListComponent } from '../../components/list/list.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [ SearchInputComponent, ListComponent ],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService)
  query = signal('');

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {

      if ( !request.query ) return of([]);

      return this.countryService.searchByCountry(request.query)

    }
  });

  // countryResource = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async({ request }) => {

  //     if ( !request.query ) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCountry(request.query)
  //     )
  //   }
  // });

}
