import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/_models/categoria';
import { Participacao } from 'src/app/_models/participacao';
import { ParticipacaoService } from 'src/app/_services/participacao.service';
import { VotoService } from 'src/app/_services/voto.service';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Voto } from 'src/app/_models/voto';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-voto-card-choice',
  templateUrl: './voto-card-choice.component.html',
  styleUrls: ['./voto-card-choice.component.css']
})
export class VotoCardChoiceComponent implements OnInit {

    private eventsSubscription: Subscription;
    @Input() events: Observable<void>;

    @Input()
    categoria: Categoria;

    participacao: Participacao[] =  new Array<Participacao>();

    voto = new Voto();

    registerForm: FormGroup;

    constructor(private participacaoService: ParticipacaoService,
                private votoService: VotoService,
                private fb: RxFormBuilder) { }

    ngOnInit() {
        this.registerForm = this.fb.formGroup(this.voto);
        this.getParticipacao();
        this.eventsSubscription = this.events.subscribe(() => this.cadastraVoto());
        this.voto.idUsuario = 'calleb';
    }

    getParticipacao() {
        this.participacaoService.getParticipacaoByCategoria(this.categoria).subscribe(
            participacao => {
                this.participacao = participacao;
            },
            error => {
                console.log(error);
            }
        );
    }

    cadastraVoto() {
        if (this.registerForm.invalid) {
            console.log('Você esqueceu desse campo');
        }

        this.votoService.cadastraVoto(this.voto).subscribe(
            () => {
                console.log('Votado');
            },
            error => {
                console.log(error);
            }
        )
    }
}
