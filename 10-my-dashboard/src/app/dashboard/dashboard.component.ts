import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@shared/footer/footer.component';
import { NavbarComponent } from '@shared/navbar/navbar.component';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
import { CopyrightComponent } from "../shared/copyright/copyright.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SidemenuComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent { }
