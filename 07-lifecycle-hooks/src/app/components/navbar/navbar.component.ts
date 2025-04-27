import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styles: `

    nav {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
    nav a {
      text-decoration: none;
      font-size: 1.5rem;
    }
    .active {
      color: #341162;
      font-weight: bold;
    }

  `
})
export class NavbarComponent { }
