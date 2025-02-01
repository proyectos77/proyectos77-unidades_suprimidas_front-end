import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./Auth/pages/login/login.component') },
  { path: '**', redirectTo: 'login' }
];
