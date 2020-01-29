import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../_models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<Categoria[]>(this.baseUrl + 'categoria');
  }

  createCategoria(categoria: Categoria) {
    return this.http.post(this.baseUrl + 'categoria', categoria);
  }

}
