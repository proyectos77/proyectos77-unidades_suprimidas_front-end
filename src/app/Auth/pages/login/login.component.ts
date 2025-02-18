import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SweetAlertService } from '../../../Core/services/sweet-alert.service';
import { SetLogin } from '../../interfaces/set-login';
import { log } from 'console';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit{

    public loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private sweet: SweetAlertService
    ){}

    ngOnInit(): void {
        this.loginForm = this.formularioSesion();
    }

    formularioSesion():FormGroup{
        return this.formBuilder.group({
            usuario: ['', [Validators.required]],
            password: ['', [Validators.required]]
        })
    }

    validarForm():void{
        if (this.loginForm.invalid) {
            this.sweet.alertaGeneral('error', 'Error', 'Ingrese el usuario y la contraseña');
            return Object.values(this.loginForm.controls).forEach(controls =>{
                controls.markAllAsTouched();
            });
        }else{
            let dataFormulario = this.crearDataForm();
            this.iniciarSesion(dataFormulario);

        }
    }

    crearDataForm():SetLogin{
        return {
          ...this.loginForm.value
        }
    }

    iniciarSesion(data: SetLogin):void{
        console.log(data);

    }

}
