import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="nav">
      <ul>
        <li routerLink="/" [routerLinkActiveOptions]="{exact: true}" routerLinkActive="_liActive">home</li>
        <li routerLink="/about" routerLinkActive="_liActive">about</li>
        <li routerLink="/contact" routerLinkActive="_liActive">contacts</li>
        <li routerLink="/todos" routerLinkActive="_liActive">todo</li>
        <li routerLink="/fetch-data" routerLinkActive="_liActive">Data</li>
      </ul>
    </div>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
