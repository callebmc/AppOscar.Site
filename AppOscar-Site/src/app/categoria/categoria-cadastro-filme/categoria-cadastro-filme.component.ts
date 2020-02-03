import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/_models/categoria';
import { CategoriaService } from 'src/app/_services/categoria.service';
import { Filme } from 'src/app/_models/filme';
import { FilmeService } from 'src/app/_services/filme.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { Participacao } from 'src/app/_models/participacao';
import { ParticipacaoService } from 'src/app/_services/participacao.service';

@Component({
  selector: 'app-categoria-cadastro-filme',
  templateUrl: './categoria-cadastro-filme.component.html',
  styleUrls: ['./categoria-cadastro-filme.component.css']
})
export class CategoriaCadastroFilmeComponent implements OnInit {

    @Input()
    categorias: Categoria[];
    registerMode = false;

    filmes: Filme[];

    participacao = new Participacao();

    registerForm: FormGroup;

    constructor(private categoriaService: CategoriaService,
                private filmeService: FilmeService,
                private participacaoService: ParticipacaoService,
                private fb: RxFormBuilder) { }

    ngOnInit() {
        this.registerForm = this.fb.formGroup(this.participacao);
        this.filmeService.getAllFilmes().subscribe(
            filmes => {
                this.filmes = filmes;
            }
        );
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

    cadastra() {
        if (this.registerForm.invalid){
            return;
        }

        if (this.registerForm.valid) {
            this.participacaoService.cadastraParticipacao(this.participacao).subscribe(
                () => {
                    console.log('Cadastrado com sucesso');
                },
                error => {
                    console.log('erro ao cadastrar');
                }
            );
        }
    }

}
