import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TiposUsuariosService } from '../../services/tipos-usuarios.service';
import { GetAllTiposUsuarios } from '../../interfaces/get-all-tipos-usuarios';
import { NgFor } from '@angular/common';
import { CargosService } from '../../services/cargos.service';
import { GetAllCargos } from '../../interfaces/get-all-cargos';

@Component({
  selector: 'app-registro-usuarios',
  imports: [RouterLink, NgFor],
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export default class RegistroUsuariosComponent implements OnInit{
    datapantalla: string = 'Registro usuarios';

    public tipoUsuario: GetAllTiposUsuarios = {
        'statusCode': 0,
        'titulo': '',
        'mensaje': '',
        'icono': '',
        'data': []
    }

    public cargos: GetAllCargos = {
        'statusCode': 0,
        'titulo': '',
        'mensaje': '',
        'icono': '',
        'data': []
    }


    constructor(private httpTipoUsuarios: TiposUsuariosService, private httpCargos : CargosService){}

    ngOnInit(): void {
        this.listadoTipoUsaurios();
        this.listarCargos();
    }

    listadoTipoUsaurios():void{
        this.httpTipoUsuarios.listadoTipoUsuarios().subscribe(tipoUsuarios => {
            if (tipoUsuarios.statusCode == 200) {
                this.tipoUsuario = tipoUsuarios
            }
        });
    }

    listarCargos():void{
        this.httpCargos.listaCargos().subscribe(cargos => {
            if (cargos.statusCode == 200) {
                this.cargos = cargos;
            }
        });
    }
}
