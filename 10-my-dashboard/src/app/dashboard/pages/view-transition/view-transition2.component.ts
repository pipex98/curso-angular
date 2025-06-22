import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  imports: [CommonModule, TitleComponent],
  template:`
    <main>
      <div class="pt-6 px-6">
        <app-title title="View Transition 2"/>

        <div class="mt-5 flex justify-end">
          <img
            srcset="https://picsum.photos/id/237/200/300"
            alt="Picsum"
            width="200"
            height="300"
            style="view-transition-name: hero1"
          />

          <div
            class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
            style="view-transition-name: hero2"
            >
          </div>

        </div>
      </div>
    </main>
  `
})
export default class ViewTransitionComponent { }
