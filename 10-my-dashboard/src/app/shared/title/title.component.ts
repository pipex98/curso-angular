import { booleanAttribute, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  template: `<h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>`
})
export class TitleComponent {

  // title = input.required<string>();
  @Input({ required: true }) title!: string
  @Input({ transform: booleanAttribute }) withShadow:boolean = false;

}
