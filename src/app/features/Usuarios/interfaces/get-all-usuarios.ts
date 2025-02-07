export interface GetAllUsuarios {
    statusCode: number;
    titulo:     string;
    mensaje:    string;
    icono:      string;
    data:       Datum[];
}


export interface Datum {
    id:             number;
    nombre:         string;
    identificacion: number;
    email:          string;
    usuario:        string;
    estado:         string;
    cargo:          string;
    tipoUsuario:    string;
}
