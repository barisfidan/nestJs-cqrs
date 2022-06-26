
import { IQuery } from '@nestjs/cqrs';
import { UserRequest } from '../dto/userRequest';

export class GetUsersByNameQuery implements IQuery {
    constructor(
        public readonly request: UserRequest

    ) { }
}