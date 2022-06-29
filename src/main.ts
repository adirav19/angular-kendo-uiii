import './polyfills';
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChartsModule } from "@progress/kendo-angular-charts";
import { AppModule } from './app/app.module';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule, { preserveWhitespaces: true }).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  

  // Otherise, log the boot error
}).catch(err => console.error(err));
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);