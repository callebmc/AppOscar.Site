import { Categoria } from './categoria';
import { Filme } from './filme';
import { Type } from 'class-transformer';
import { prop } from '@rxweb/reactive-form-validators';
import { Voto } from './voto';

export class Participacao {

    @prop()
    id: number;

    @prop()
    idFilme: number;
    @prop()
    idCategoria: number;

    @Type(() => Categoria)
    categoria: Categoria;

    @Type(() => Filme)
    filme: Filme;

    @Type(() => Voto)
    voto: Voto;
}
