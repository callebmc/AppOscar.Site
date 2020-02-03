import { plainToClass } from 'class-transformer';

export interface JsonDeserializer {
    deserialize(value: object): any;
}

export class JsonDeserializerService implements JsonDeserializer {
    classRef: any;

    constructor(classRef: any) {
        this.classRef = classRef;
    }

    deserialize(value: object) {
        const deserialized = plainToClass(this.classRef, value);
        return deserialized;
    }
}

export class JsonDeserializerFactory {
    construct(classRef: any) {
        return new JsonDeserializerService(classRef);
    }
}
