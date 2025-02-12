import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllUsuarios } from '../interfaces/get-all-usuarios';
import { environment } from '../../../../environment/environment.staging';
import { StoreUsuarios } from '../interfaces/store-usuarios';
import { RespuestaRegistroUsuario } from '../interfaces/respuesta-registro-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicesService {

    public url: string = environment.apiUrl + '/usuarios';

    constructor(private httpUsuarios: HttpClient) { }

    consultaListaUsuarios():Observable<GetAllUsuarios>{
        return this.httpUsuarios.get<GetAllUsuarios>(this.url);
    }

    registrarUsuario(data: StoreUsuarios):Observable<RespuestaRegistroUsuario>{
        return this.httpUsuarios.post<RespuestaRegistroUsuario>(this.url, data);
    }

}
