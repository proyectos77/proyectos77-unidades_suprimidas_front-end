import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.staging';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { GetLogin } from '../interfaces/get-login';
import { SetLogin } from '../interfaces/set-login';
import { SetLogout } from '../interfaces/set-logout';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    public url: string = environment.apiUrl + '/login';
    public urlLogout: string = environment.apiUrl + '/logout';

    constructor(private loginHttp: HttpClient) { }

    login(data: SetLogin):Observable<GetLogin>{
        return this.loginHttp.post<GetLogin>(this.url, data).pipe(
            tap(response => {
                this.guardarSesion(response.accessToken, response.usuario);
            })
        );
    }

    private guardarSesion(token: string, user:any){
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('usuario', JSON.stringify(user));
    }

    getToken():string{
        return sessionStorage.getItem('token') || '';
    }

    logueado():boolean{
        return !!this.getToken();
    }

    cerrarSesion():Observable<SetLogout>{
        /* sessionStorage.removeItem('token');
        sessionStorage.removeItem('usuario'); */
        return this.loginHttp.get<SetLogout>(this.urlLogout);
    }
}
