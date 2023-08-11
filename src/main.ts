

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule), provideRouter(routes), provideHttpClient(), provideAnimations()]
})
.catch(err => console.error(err));
