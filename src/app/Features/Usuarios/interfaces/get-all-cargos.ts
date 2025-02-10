export interface GetAllCargos {
    statusCode: number;
    titulo:     string;
    mensaje:    string;
    icono:      string;
    data:       Datum[];

}

export interface Datum {
    id:     number;
    nombre: string;
}
