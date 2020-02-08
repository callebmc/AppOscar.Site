import { Component, OnInit } from '@angular/core';
import { VotoService } from 'src/app/_services/voto.service';
import { Voto } from 'src/app/_models/voto';
import { AuthServiceService } from 'src/app/_services/auth-service.service';

@Component({
  selector: 'app-votos-escolhidos',
  templateUrl: './votos-escolhidos.component.html',
  styleUrls: ['./votos-escolhidos.component.css']
})
export class VotosEscolhidosComponent implements OnInit {

    votos: Voto[] = new Array<Voto>();

    constructor(private votoService: VotoService,
                private authService: AuthServiceService) { }

    ngOnInit() {
        this.carregaVotos();
    }


    carregaVotos() {
        this.votoService.listaVotos(this.authService.decodedToken.sub).subscribe(
            votos => {
                this.votos = votos;
            },
            error => {
                console.log(error);
            }
        );
    }

}
