import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<h1>Navbar Component</h1>
              <p>Lorem ipsum doller imk</p>`,
  styles: [
    `
      h1 {
        color: red;
        font-size: 50px;
      }
    `,
  ],
})
export class NavbarComponent {}

// template: '<h1> Navbar Component</h1>',
// styles:['h1{ color: red}'],
