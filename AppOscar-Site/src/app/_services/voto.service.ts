import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Voto } from '../_models/voto';

@Injectable({
  providedIn: 'root'
})
export class VotoService {

    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }


    checkVoto(idUsuario: string) {
        const url = `voto/checkVoto/${idUsuario}`;
        return this.http.get<boolean>(this.baseUrl + url);
    }

    cadastraVoto(voto: Voto) {
        const url = `voto`;
        return this.http.post(this.baseUrl + url, voto);
    }
}
