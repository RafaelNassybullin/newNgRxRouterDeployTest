import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>ngrx deploy runing {{title}}</h1>
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';

  constructor() {}

}
