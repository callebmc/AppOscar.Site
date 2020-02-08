import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Voto } from '../_models/voto';
import { JsonDeserializer, JsonDeserializerFactory } from './json-deserialize.service';
import { concatMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VotoService {

    baseUrl = environment.apiUrl;
    deserializeVoto: JsonDeserializer;

    constructor(private http: HttpClient,
                private jsonFactory: JsonDeserializerFactory) {

                    this.deserializeVoto = this.jsonFactory.construct(Voto);
                }

    checkVoto(idUsuario: string) {
        const url = `voto/checkVoto/${idUsuario}`;
        return this.http.get<boolean>(this.baseUrl + url);
    }

    cadastraVoto(voto: Voto) {
        const url = `voto`;
        return this.http.post(this.baseUrl + url, voto);
    }

    listaVotos(idUsuario: string) {
        const url = `voto`;
        const queryParams = {
            usuario: idUsuario
        };

        return this.http.get<Voto[]>(this.baseUrl + url, {params: queryParams}).pipe(
            concatMap(votos => {
                const deserialized = this.deserializeVoto.deserialize(
                    votos
                ) as Array<Voto>;
                return deserialized;
            }),
            toArray()
        );
    }
}
