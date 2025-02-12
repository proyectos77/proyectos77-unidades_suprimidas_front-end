import { Component, Input, OnInit} from '@angular/core';
import { DatumUsuario } from '../../interfaces/get-all-usuarios';
import { CargosService } from '../../services/cargos.service';
import { GetAllCargos } from '../../interfaces/get-all-cargos';
import { NgFor } from '@angular/common';
import { TiposUsuariosService } from '../../services/tipos-usuarios.service';
import { GetAllTiposUsuarios } from '../../interfaces/get-all-tipos-usuarios';
import { log } from 'console';

@Component({
  selector: 'app-modal-editar-usuario',
  imports: [NgFor],
  templateUrl: './modal-editar-usuario.component.html',
  styleUrl: './modal-editar-usuario.component.css',

})
export class ModalEditarUsuarioComponent implements OnInit {  // Implementar OnChanges

    @Input() usuario!: DatumUsuario;
    public cargos: GetAllCargos = {
        'statusCode': 0,
        'titulo': '',
        'mensaje': '',
        'icono': '',
        'data': []
    }

    public tipoUsuarios: GetAllTiposUsuarios = {
        'statusCode': 0,
        'titulo': '',
        'mensaje': '',
        'icono': '',
        'data': []
    }

    constructor(private httpCargos: CargosService, private httpTipoUsuario: TiposUsuariosService){}

    ngOnInit(): void {
        this.listadoCargos();
        this.listaTipoUsuario();
    }

    listadoCargos():void{
        this.httpCargos.listaCargos().subscribe(cargos => {
            this.cargos = cargos;
        })
    }

    listaTipoUsuario():void{
        this.httpTipoUsuario.listadoTipoUsuarios().subscribe(tipoUsuarios => {
            this.tipoUsuarios = tipoUsuarios;
        });
    }

}
