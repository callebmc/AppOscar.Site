import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/_models/filme';
import { FilmeService } from 'src/app/_services/filme.service';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html'
})
export class FilmeListComponent implements OnInit {

    filmes: Filme[];
    registerMode = false;

    constructor(private filmeService: FilmeService) { }

    ngOnInit() {
        this.filmeService.getAllFilmes().subscribe(
            filmes => {
                this.filmes = filmes;
            }
        );
    }

    registroFilmeToogle() {
        this.registerMode = true;
    }

    cancelRegisterMode(registerMode: boolean) {
        this.registerMode = registerMode;
    }
}
