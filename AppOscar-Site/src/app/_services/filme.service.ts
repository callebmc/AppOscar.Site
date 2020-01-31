import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../_models/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAllFilmes() {
        return this.http.get<Filme[]>(this.baseUrl + 'filme');
    }

    createFilme(filme: Filme) {
        return this.http.post(this.baseUrl + 'filme', filme);
    }
}
