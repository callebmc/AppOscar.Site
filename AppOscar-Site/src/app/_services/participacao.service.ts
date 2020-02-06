import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Participacao } from "../_models/participacao";
import {
    JsonDeserializer,
    JsonDeserializerFactory
} from "./json-deserialize.service";
import { Filme } from "../_models/filme";
import { Categoria } from "../_models/categoria";
import { concatMap, toArray } from "rxjs/operators";
import { of, concat } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ParticipacaoService {
    baseUrl = environment.apiUrl;

    deserialize: JsonDeserializer;
    deserializeFilme: JsonDeserializer;
    deserializeCategoria: JsonDeserializer;

    constructor(
        private http: HttpClient,
        private jsonFactory: JsonDeserializerFactory
    ) {
        this.deserialize = this.jsonFactory.construct(Participacao);
        this.deserializeFilme = this.jsonFactory.construct(Filme);
        this.deserializeCategoria = this.jsonFactory.construct(Categoria);
    }

    getParticipacaoByCategoria(categoria: Categoria) {
        const url = `participacao/by-categoria/${categoria.idCategoria}`;
        return this.http.get<Participacao[]>(this.baseUrl + url).pipe(
            concatMap(participacao => {
                const deserialized = this.deserialize.deserialize(
                    participacao
                ) as Array<Participacao>;
                return deserialized;
            }),
            toArray()
        );
    }

    cadastraParticipacao(participacao: Participacao) {
        return this.http.post(this.baseUrl + 'participacao', participacao);
    }
}
