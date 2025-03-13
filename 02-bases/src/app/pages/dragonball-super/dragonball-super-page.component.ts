import { Component, inject} from '@angular/core';
import { CharacterListComponent } from '../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from "../components/dragonball/character-add/character-add.component";
import { DragonballService } from '../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
  selector: 'dragonball-super'
})
export class DragonballSuperPageComponent {

  // constructor(
  //   public dragonballService: DragonballService
  // ) {

  public dragonballService = inject(DragonballService);

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 8000 }
  // ]);

  // addCharacter(character: Character):void {
  //   this.characters.update(list => [...list, character])
  // }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // });

}
