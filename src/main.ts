import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())]
})
  .catch((err) => console.error(err));
