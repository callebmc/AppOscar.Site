import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/_models/categoria';

@Component({
  selector: 'app-categoria-card',
  templateUrl: './categoria-card.component.html',
  styleUrls: ['./categoria-card.component.css']
})
export class CategoriaCardComponent implements OnInit {

   @Input()
   categoria: Categoria;

  constructor() { }

  ngOnInit() {
  }

}
