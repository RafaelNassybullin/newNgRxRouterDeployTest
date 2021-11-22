import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="wrapper">
      <h1>Not Found 404 <br>  no  baby!!! no no</h1>
    <div class="image">
      <img src="../../assets/unnamed%20(1).jpg" alt="">
    </div>
    </div>
  `,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
