import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-gif-history',
  imports: [ListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {

  // query = inject(ActivatedRoute).params.subscribe(
  //   params => {
  //     console.log( params['query']);
  //   }
  // );

  gifsService = inject(GifService)

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map( params => params['query'] )
  ));

  gifsByKey = computed(() => this.gifsService.getHistoryGifs(this.query()));

}
