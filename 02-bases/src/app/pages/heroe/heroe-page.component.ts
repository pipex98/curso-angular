import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  imports: [ UpperCasePipe ]
})

export class HeroePageComponent {

  nameSignal = signal('Ironman');
  ageSignal = signal(45);

  heroDescription = computed(() => {
    const description = `${ this.nameSignal() } - ${ this.ageSignal() }`;
    return description;
  });

  capitalizeName = computed(() => this.nameSignal().toUpperCase() );

  changeHero():void {
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(22);
  }

  resetForm():void {
    this.nameSignal.set('Ironman');
    this.ageSignal.set(35);
  }

  changeAge():void {
    this.ageSignal.set(60);
  }

}
