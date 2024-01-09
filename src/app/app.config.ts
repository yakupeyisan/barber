import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor, loaderInterceptor, notificationInterceptor, routePageInterceptor } from './admin/custom-functions/interceptors';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withInterceptors([authInterceptor,loaderInterceptor,notificationInterceptor,routePageInterceptor])),
  ]
};
