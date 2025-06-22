import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  imports: [ RouterModule ],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {

  public menuItems = routes
    .map( route => route.children ?? [] )
    .flat()
    .filter( route => route && !route.path?.includes(':') )
    .filter( route => route && !route.path?.includes('**') )
    // .filter( route => route && route.path )


  constructor() {

    // const dashboardRoutes = routes
    // .map( route => route.children ?? [] )
    // .flat()
    // .filter( route => route && !route.path?.includes(':') )
    // .filter( route => route && !route.path?.includes('**') )
    // .filter( route => route && route.path )

    // console.log(dashboardRoutes);


  }

}
