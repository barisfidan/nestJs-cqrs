import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { GetUsersByNameQuery } from '../impl/get-usersByName';

@QueryHandler(GetUsersByNameQuery)
export class GetUsersByNameHandler implements IQueryHandler<GetUsersByNameQuery> {
    constructor(
        @InjectRepository(Users) private userRepo: Repository<Users>,
    ) { }

    async execute(query: GetUsersByNameQuery): Promise<Users> {
        console.log(query);
        if (query) {
            return this.userRepo.findOne(query.request.Id);
        }

    }

}
