import { Component, input } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [ ListItemComponent ],
  templateUrl: './list.component.html'
})
export class ListComponent {

  //TODO: input string[];
  gifs = input.required<Gif[]>();

}
