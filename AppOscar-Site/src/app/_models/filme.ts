import { Participacao } from './participacao';
import { Type } from 'class-transformer';
import { Categoria } from './categoria';

export class Filme {

    idFilme: string;

    nomeFilme: string;

    // @Type(() => Participacao)
    participantes: Participacao;

    // @Type(() => Categoria)
    categoriasVencidas: Categoria;

    filmePhotoUrl: string;
}
