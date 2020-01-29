import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Categoria } from 'src/app/_models/categoria';
import { CategoriaService } from 'src/app/_services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html'
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria[];
  registerMode = false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
      this.categoriaService.getCategorias().subscribe(
          categorias => {
              this.categorias = categorias;
          }
      );
  }

  registroCategoriaToogle() {
      this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
