import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment.staging';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllTiposUsuarios } from '../interfaces/get-all-tipos-usuarios';

@Injectable({
  providedIn: 'root'
})
export class TiposUsuariosService {

    private url: string = environment.apiUrl + '/tipoUsuarios';

    constructor(private httTipoUsuario: HttpClient) { }

    public listadoTipoUsuarios():Observable<GetAllTiposUsuarios>{
        return this.httTipoUsuario.get<GetAllTiposUsuarios>(this.url);
    }
}
