export interface RespuestaRegistroUsuario {
    statusCode: number;
    titulo:     string;
    mensaje:    string;
    icono:      string;
    data:       Data;
}


export interface Data {
  nombre_usuario:         string;
  identificacion_usuario: number;
  email_usuario:          string;
  user_usuario:           string;
  id_tipo_usuario:        number;
  id_cargo:               number;
  id_usuario:             number;
}
