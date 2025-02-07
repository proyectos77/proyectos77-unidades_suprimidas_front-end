import { Component, OnInit } from '@angular/core';
import { GetAllUsuarios } from '../../interfaces/get-all-usuarios';
import { UsuariosServicesService } from '../../services/usuarios-services.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liestado-usuarios',
  imports: [CommonModule, NgFor, RouterLink],
  templateUrl: './liestado-usuarios.component.html',
  styleUrl: './liestado-usuarios.component.css'
})
export default class LiestadoUsuariosComponent implements OnInit{


    public datos: GetAllUsuarios = {

        "statusCode": 0,
        "titulo": '',
        "mensaje": '',
        "icono": '',
        "data": []
    }

    constructor(private httpUsuarios: UsuariosServicesService){}

    ngOnInit(): void {
        this.listadoUsuarios();
    }

    listadoUsuarios():void{
        this.httpUsuarios.consultaListaUsuarios().subscribe(usuarios => {
            if (usuarios.statusCode == 200) {
                this.datos = usuarios;
            }

        })
    }

    /* listarUsuarios():void{
        if (this.data.data.length > 0) {

        }
    } */

}
