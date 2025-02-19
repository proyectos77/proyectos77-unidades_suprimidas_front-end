export interface GetAllUsuarios {
    statusCode: number;
    titulo:     string;
    mensaje:    string;
    icono:      string;
    data:       DatumUsuario[];
}


export interface DatumUsuario {
    id:             number;
    nombre:         string;
    identificacion: number;
    email:          string;
    usuario:        string;
    estado:         string;
    cargo:          string;
    tipoUsuario:    string;
}
