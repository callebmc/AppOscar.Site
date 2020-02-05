import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Categoria } from "src/app/_models/categoria";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CategoriaService } from 'src/app/_services/categoria.service';

@Component({
    selector: "app-categoria-create",
    templateUrl: "./categoria-create.component.html",
    styleUrls: ["./categoria-create.component.css"]
})
export class CategoriaCreateComponent implements OnInit {

    @Output() cancelRegister = new EventEmitter();
    categoriaNew: Categoria;

    registerForm: FormGroup;

    constructor(private categoriaService: CategoriaService, private fb: FormBuilder) {}

    ngOnInit() {
        this.createRegisterForm();
    }

    createRegisterForm() {
        this.registerForm = this.fb.group({
            nomeCategoria: [''],
            pontosCategoria: [''],
            categoriaPhotoUrl: ['']
        });
    }

    cadastraCategoria() {
        if (this.registerForm.valid) {
            this.categoriaNew = Object.assign({}, this.registerForm.value);
            this.categoriaService.createCategoria(this.categoriaNew).subscribe(
                () => {
                    console.log('Criado com sucesso');
                },
                error =>{
                    console.log(error);
                }
            );
        }
    }

    cancel() {
        this.cancelRegister.emit(false);
      }
}
