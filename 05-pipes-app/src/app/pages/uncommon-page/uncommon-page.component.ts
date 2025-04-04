import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Felipe',
  gender: 'male',
  age: 39,
  address: 'Medellin, Colombia'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 39,
  address: 'Toronto, Canada'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
    DecimalPipe
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos'
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1))
    console.log(this.clients().length);
  }

  // KeyValue Pipe
  profile = {
    name: 'Felipe',
    age: 26,
    address: 'Medellin, Colombia'
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("Tenemos un error en la data")
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 3500);
  });

  myObservableTimer = interval(2000)
  .pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap', value)));

  pi = 3.14159265359;
}
