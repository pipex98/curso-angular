import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  imports: [CommonModule, TitleComponent],
  template:`
    <main>
      <div class="pt-6 px-6">
        <app-title title="View Transition 1"/>

        <div class="mt-5 flex justify-start">
          <img
            srcset="https://picsum.photos/id/237/200/300"
            alt="Picsum"
            width="200"
            height="300"
            style="view-transition-name: hero1"
          />

          <div
            class="bg-blue-500 w-56 h-56"
            style="view-transition-name: hero2"
            >
          </div>

        </div>
      </div>
    </main>
  `
})
export default class ViewTransitionComponent { }
