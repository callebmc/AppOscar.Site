import { Injectable } from '@angular/core';
import { CategoriaService } from '../_services/categoria.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categoria } from '../_models/categoria';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()

export class CategoriaListResolver implements Resolve<Categoria[]> {
    constructor(private categoriaService: CategoriaService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Categoria[]> {
        return this.categoriaService.getCategorias()
            .pipe(
                catchError( error => {
                    return of(null);
                })
            );
    }

}
