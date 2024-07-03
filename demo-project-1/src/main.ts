import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const appConfig = {
  providers: [
    provideHttpClient(withFetch()), provideAnimationsAsync('noop')
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
