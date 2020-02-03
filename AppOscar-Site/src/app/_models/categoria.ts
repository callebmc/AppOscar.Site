import { Type } from 'class-transformer';
import { Filme } from './filme';

export class Categoria {
    idCategoria: string;
    nomeCategoria: string;
    pontosCategoria: string;
    categoriaPhotoUrl: string;

    @Type(() => Filme)
    filmes: Filme[];
}
