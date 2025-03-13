import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroePageComponent } from './pages/heroe/heroe-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroePageComponent
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];
