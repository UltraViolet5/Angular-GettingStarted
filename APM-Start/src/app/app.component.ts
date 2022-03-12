import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:
    `
      <div>
        <h1>{{pageTitle}}</h1>
        <div>My First App Component</div>
      </div>
    `
  
    
})
export class AppComponent {
  pageTitle: string = "ACME PRODUCT MANAGMENT" ;
}
