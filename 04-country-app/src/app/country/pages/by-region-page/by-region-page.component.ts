import { Component, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

import { CountryService } from '../../services/country.service';
import { ListComponent } from '../../components/list/list.component';
import { Region } from '../../interfaces/region.interface';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string): Region {

  queryParam = queryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic'
  };

  return validRegions[queryParam] ?? 'Africa';
};

@Component({
  selector: 'app-by-region-page',
  imports: [ListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  queryParam = ( this.activatedRoute.snapshot.queryParamMap.get('query') ?? '' ) as Region;

  selectedRegion = linkedSignal<Region>(() => validateQueryParam(this.queryParam) );

  countryResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {

      if ( !request.region ) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: {
          query: request.region
        }
      });

      return this.countryService.searchByRegion(request.region)
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
