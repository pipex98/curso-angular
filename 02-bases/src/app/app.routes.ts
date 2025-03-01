import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroePageComponent } from './pages/heroe/heroe-page.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroePageComponent
  }

];
