export interface GetAllTiposUsuarios {
    statusCode: number;
    titulo:     string;
    mensaje:    string;
    icono:      string;
    data:       DatumTipoUsuarios[];
}

export interface DatumTipoUsuarios {
  id:     number;
  nombre: string;
}

