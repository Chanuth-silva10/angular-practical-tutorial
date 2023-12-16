import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// what is angular - pipe
// Pipes are used to transforming data into a particular format when we only need that data transformed 'in' a template. or the HTML View.

// 1. Uppercase pipe
// 2. Lowercase pipe
// 3. Decimal / Number pipe
// 4. Currency pipe
// 5. Data pipe
// 6. JSON pipe
// 7. Precent pipe
// 8. Slice pipe