import { prop } from '@rxweb/reactive-form-validators';

export class Voto {

    @prop()
    idUsuario: string;

    @prop()
    idParticipacao: string;
}
