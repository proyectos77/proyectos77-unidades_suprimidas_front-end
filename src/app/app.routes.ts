import { Routes } from '@angular/router';


export const routes: Routes = [
  /* { path: 'login', loadComponent: () => import('./Auth/pages/login/login.component') }, */
  /* { path: '**', redirectTo: 'login' } */

      /* { path: 'usuarios', component: UsuariosComponent, children: [{ path: 'registro', component: RegistroUsuariosComponent}]} */

      /* {path: '', loadComponent: () => import('./features/Usuarios/page/usuarios/usuarios.component')} */

      {path: 'usuarios', loadChildren: () => import('./features/Usuarios/usuarios.routes')},
      {path: '**', redirectTo: 'usuarios', pathMatch:'full'}
];
