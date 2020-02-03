import { Component, OnInit } from '@angular/core';
import { Participacao } from 'src/app/_models/participacao';
import { Categoria } from 'src/app/_models/categoria';
import { CategoriaService } from 'src/app/_services/categoria.service';
import { ParticipacaoService } from 'src/app/_services/participacao.service';


@Component({
  selector: 'app-indicados-list',
  templateUrl: './indicados-list.component.html',
  styleUrls: ['./indicados-list.component.css']
})
export class IndicadosListComponent implements OnInit {

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
