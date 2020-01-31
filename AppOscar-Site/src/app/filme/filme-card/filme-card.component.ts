import { Component, OnInit, Input } from '@angular/core';
import { Filme } from 'src/app/_models/filme';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html'
})
export class FilmeCardComponent implements OnInit {

    @Input()
    filme: Filme;

    constructor() { }

    ngOnInit() {
    }

}
