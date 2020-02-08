import { prop } from '@rxweb/reactive-form-validators';

export class Voto {

    @prop()
    id: number;

    @prop()
    dthCriacao: string;

    @prop()
    idUsuario: string;

    @prop()
    idParticipacao: string;
}
