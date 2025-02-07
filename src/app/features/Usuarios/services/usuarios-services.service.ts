import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllUsuarios } from '../interfaces/get-all-usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicesService {

    public url: string = 'http://127.0.0.1:8000/api/usuarios';

    constructor(private httpUsuarios: HttpClient) { }

    consultaListaUsuarios():Observable<GetAllUsuarios>{
        return this.httpUsuarios.get<GetAllUsuarios>(this.url);
    }

}
