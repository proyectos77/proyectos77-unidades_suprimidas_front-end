import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'registroUsuarios', loadComponent: () =>  import('./pages/registro-usuarios/registro-usuarios.component')},
    { path: '', loadComponent: () =>  import('./pages/liestado-usuarios/liestado-usuarios.component')},

];

export default routes;
