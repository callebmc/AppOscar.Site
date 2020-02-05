import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/_models/categoria';
import { ParticipacaoService } from 'src/app/_services/participacao.service';
import { Filme } from 'src/app/_models/filme';
import { Participacao } from 'src/app/_models/participacao';

@Component({
  selector: 'app-indicados-card',
  templateUrl: './indicados-card.component.html',
  styleUrls: ['./indicados-card.component.css']
})
export class IndicadosCardComponent implements OnInit {

    @Input()
    categoria: Categoria;

    // filme: Filme[] = new Array<Filme>();
    participacao: Participacao[] =  new Array<Participacao>();

    constructor(private participacaoService: ParticipacaoService) { }

    ngOnInit() {
        this.getParticipacao();
        console.log(this.participacao);
    }

    getParticipacao() {
        this.participacaoService.getParticipacaoByCategoria(this.categoria).subscribe(
            participacao => {
                // console.log(participacao);
                this.participacao = participacao;
            },
            error => {
                console.log(error);
            }
        );
    }
}
