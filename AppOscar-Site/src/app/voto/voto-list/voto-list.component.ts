import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/_models/categoria';
import { Participacao } from 'src/app/_models/participacao';
import { CategoriaService } from 'src/app/_services/categoria.service';
import { ParticipacaoService } from 'src/app/_services/participacao.service';
import { VotoService } from 'src/app/_services/voto.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-voto-list',
  templateUrl: './voto-list.component.html',
  styleUrls: ['./voto-list.component.css']
})
export class VotoListComponent implements OnInit {

    participacao: Participacao[];

    categorias: Categoria[];

    usuario = true;

    eventsSubject: Subject<void> = new Subject<void>();

    constructor(private categoriaService: CategoriaService,
                private participacaoService: ParticipacaoService,
                private votoService: VotoService) { }

    ngOnInit() {
        this.checaUsuario();
        this.initCategorias();
    }


    checaUsuario() {
        this.votoService.checkVoto('cesar').subscribe(
            votou => {
                this.usuario = votou;
            },
            error => {
                console.log(error);
            }
        );
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

    confirmarVoto() {}


    emitEventToChild() {
        this.eventsSubject.next();
      }
}
