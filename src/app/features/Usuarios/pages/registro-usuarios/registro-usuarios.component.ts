import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro-usuarios',
  imports: [RouterLink],
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export default class RegistroUsuariosComponent {
    datapantalla: string = 'Registro usuarios';
}
