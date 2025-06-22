import { Component, input } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  selector: 'app-defer-views',
  imports: [HeavyLoadersSlowComponent, TitleComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

  constructor() {

    const start = Date.now();
    while( Date.now() - start < 3000 ) {}

    console.log('Cargado');

  }

}
