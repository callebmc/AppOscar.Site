import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/_models/categoria';
import { Participacao } from 'src/app/_models/participacao';
import { CategoriaService } from 'src/app/_services/categoria.service';
import { ParticipacaoService } from 'src/app/_services/participacao.service';

@Component({
  selector: 'app-voto-list',
  templateUrl: './voto-list.component.html',
  styleUrls: ['./voto-list.component.css']
})
export class VotoListComponent implements OnInit {

    participacao: Participacao[];

    categorias: Categoria[];

    constructor(private categoriaService: CategoriaService,
                private participacaoService: ParticipacaoService) { }

    ngOnInit() {
        this.initCategorias();
    }


    initCategorias() {
        this.categoriaService.getCategorias().subscribe(
            categorias => {
                console.log(categorias);
                this.categorias = categorias;
            },
            error => {
                console.log(error);
            }
        );
    }
}
