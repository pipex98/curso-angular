import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';


@Component({
  selector: 'app-users',
  imports: [ RouterModule ],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {

  public usersService = inject( UsersService );



}
