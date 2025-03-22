import { Routes } from '@angular/router';

import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryLayoutComponent } from './layouts/CountryLayout/country-layout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

export const countryRoutes: Routes = [

  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent
      },

      // byCountry
      {
        path: 'by-country',
        component: ByCountryPageComponent
      },

      // byRegionPage
      {
        path: 'by-region',
        component: ByRegionPageComponent
      },

      {
        path: 'by/:code',
        component: CountryPageComponent
      },

      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ]
  },

];

export default countryRoutes;
