import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Display Data and event handling

// 1. Angular Data Binding Methods
// 2. Angular Two-way Data Binding 
// 3. How to Handle Events in Angular 
       
//        Click 
//        Keyup 
//        filtering