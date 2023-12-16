import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// what is Angular Directive and How to use 

// Types of Angular Directives(Components)
//         Component Directive
//         Structural Directive
//         Attribute Directive
//         Custom Directive

// About 
//         ngIf Directive, 
//         ngTemplate Directive, 
//         ngSwitchCase Directive,
//         ngFor Directive

// Learn About ngClass & ngStyle Directive

// Learn Difference of strctural and Attribute Directive