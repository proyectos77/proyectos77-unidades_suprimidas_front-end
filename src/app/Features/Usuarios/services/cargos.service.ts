import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment.staging';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetAllCargos } from '../interfaces/get-all-cargos';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

    private url:string = environment.apiUrl + '/cargos';

    constructor(private httpCargos : HttpClient) {}

    listaCargos():Observable<GetAllCargos>{
        return this.httpCargos.get<GetAllCargos>(this.url);
    }
}
