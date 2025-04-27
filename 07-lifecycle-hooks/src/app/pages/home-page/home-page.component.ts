import { afterNextRender, afterRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = ( ...messages:string[] ) => {
  console.log(`${ messages[0] } %c ${ messages.slice(1).join(', ') }`,
  'color: #524f8b'
  );
}

@Component({
  selector: 'app-home-page',
  imports: [ TitleComponent ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {

  traditionalProperty = 'Felipe';
  signalProperty = signal('Felipe');

  constructor() {
    log('Constructor llamado');

    // setTimeout(() => {
    //   this.signalProperty.set('Juan Carlos');
    //   this.traditionalProperty = 'Pedro';
    // }, 2000);
  }

  changeTraditional() {
    this.traditionalProperty = 'Felipe Vasquez';
  };

  changeSignal() {
    this.signalProperty.set('Felipe Vasquez');
  };

  basicEffect = effect(( onCleanup ) => {
    log('effect', 'Disparar efectos secundarios');

    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir');
    })
  });

  ngOnInit(){
    log(
      'ngOnInit',
      "Runs once after Angular has initialized all the component's inputs"
    );
  }

  ngOnChanges() {
    log(
      'ngOnChanges',
      "Runs every time the component's inputs have changed."
    );
  }

  ngDoCheck() {
    log(
      'ngDoCheck',
      "Runs every time this component is checked for changes."
    );
  }

  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized"
    );
  }

  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      "Runs every time this component content has been checked for changes."
    );
  }

  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs once after the component's view has been initialized."
    );
  }

  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "Runs every time the component's view has been checked for changes."
    );
  }

  ngOnDestroy() {
    log(
      'ngOnDestroy',
      'Runs once before the component is destroyed.'
    );
  };

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  });

  afterRenderEffect = afterRender(() => {
    log('afterRender',
      'Runs every time all components have been rendered to the DOM.'
    );
  });



}
