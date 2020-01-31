import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filme } from 'src/app/_models/filme';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilmeService } from 'src/app/_services/filme.service';

@Component({
  selector: 'app-filme-create',
  templateUrl: './filme-create.component.html',
  styleUrls: ['./filme-create.component.css']
})
export class FilmeCreateComponent implements OnInit {

    @Output() cancelRegister = new EventEmitter();

    filmeNew: Filme;

    registerForm: FormGroup;

    constructor(private filmeService: FilmeService,
                private fb: FormBuilder) { }

    ngOnInit() {
        this.createRegisterForm();
    }

    createRegisterForm() {
        this.registerForm = this.fb.group({
            nomeFilme: ['']
        });
    }

    cadastraCategoria() {
        if (this.registerForm.valid) {
            this.filmeNew = Object.assign({}, this.registerForm.value);
            this.filmeService.createFilme(this.filmeNew)
                .subscribe(
                    () => {
                        console.log('Criado com Sucesso');
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
    }

    cancel() {
        this.cancelRegister.emit(false);
    }

}
