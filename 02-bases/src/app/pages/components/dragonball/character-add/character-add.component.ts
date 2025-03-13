import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html'
})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter():void {
     if (!this.name() || !this.power() || this.power() <- 0) {
          return;
        }

        const newCharacter: Character = {
          id: Math.floor(Math.random() + 100),
          name: this.name(),
          power: this.power()
        }

        // this.characters.update((list) => [...list, newCharacter]);
        this.newCharacter.emit(newCharacter);
        console.log({ newCharacter });
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
