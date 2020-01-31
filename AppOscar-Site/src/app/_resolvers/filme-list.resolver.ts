import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Filme } from '../_models/filme';
import { FilmeService } from '../_services/filme.service';

@Injectable()

export class FilmeListResolver implements Resolve<Filme[]> {
    constructor(private filmeService: FilmeService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Filme[]> {
        return this.filmeService.getAllFilmes()
            .pipe(
                catchError( error => {
                    return of(null);
                })
            );
    }

}
