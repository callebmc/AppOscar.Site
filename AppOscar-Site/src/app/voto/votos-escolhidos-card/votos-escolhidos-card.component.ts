import { Component, OnInit, Input } from '@angular/core';
import { ParticipacaoService } from 'src/app/_services/participacao.service';
import { Participacao } from 'src/app/_models/participacao';

@Component({
  selector: 'app-votos-escolhidos-card',
  templateUrl: './votos-escolhidos-card.component.html',
  styleUrls: ['./votos-escolhidos-card.component.css']
})
export class VotosEscolhidosCardComponent implements OnInit {


    @Input()
    id: number;

    participacao: Participacao = new Participacao();

    constructor(private participacaoService: ParticipacaoService) { }

    ngOnInit() {
        this.getParticipacao();
    }

    getParticipacao() {
        this.participacaoService.getParticipacaoPorId(this.id).subscribe(
            part => {
                this.participacao = part;
            },
            error => {
                console.log(error);
            }
        );
    }

}
