import { Component, inject, input, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ListComponent } from '../../components/list/list.component';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  imports: [ SearchInputComponent, ListComponent ],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {

      if ( !request.query ) return of([]);

      return this.countryService.searchByRegion(request.query)
    }
  });

  // countryResource = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async({ request }) => {

  //     if ( !request.query ) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByRegion(request.query)
  //     )
  //   }
  // });

}
