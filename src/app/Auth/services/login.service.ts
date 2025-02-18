import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.staging';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetLogin } from '../interfaces/get-login';
import { SetLogin } from '../interfaces/set-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    public url: string = environment.apiUrl + '/login';

    constructor(private loginHttp: HttpClient) { }

    login(data: SetLogin):Observable<GetLogin>{
        return this.loginHttp.post<GetLogin>(this.url, data);
    }
}
