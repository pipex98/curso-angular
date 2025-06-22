import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal }  from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-user',
  imports: [ TitleComponent ],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById( id ))
    )
  )


  // titleLabel = Información del usuario: Tracey Ramos
  public titleLabel = computed( () => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${this.user()?.last_name} `
    }
    return 'Información del usuario';
  });

  // constructor() {
  //   this.route.params.subscribe(params => {
  //     console.log(params);
  //   });
  // }


}
