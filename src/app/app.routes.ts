import { Routes } from '@angular/router';
import UsuariosComponent from './features/Usuarios/page/usuarios/usuarios.component';

export const routes: Routes = [
  /* { path: 'login', loadComponent: () => import('./Auth/pages/login/login.component') }, */
  /* { path: '**', redirectTo: 'login' } */

      { path: 'usuarios', component: UsuariosComponent}
];
