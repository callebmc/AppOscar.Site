import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuxService {

    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getTimeLeft() {
        return this.http.get<number>(this.baseUrl + 'time');
    }

}