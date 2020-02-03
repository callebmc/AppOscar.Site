import { Categoria } from './categoria';
import { Filme } from './filme';
import { Type } from 'class-transformer';

export class Participacao {
    id: number;
    idFilme: number;
    idCategoria: number;

    @Type(() => Categoria)
    categoria: Categoria;

    @Type(() => Filme)
    filme: Filme;
}
