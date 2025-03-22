import { Component } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";

@Component({
  selector: 'app-by-capital',
  imports: [ListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  onSearch(value:string) {
    console.log({value});
  }

}
