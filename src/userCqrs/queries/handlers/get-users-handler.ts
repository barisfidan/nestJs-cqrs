import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { GetUsersQuery } from '../impl/get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<Users> {
    constructor(
        @InjectRepository(Users) private userRepo: Repository<Users>,
    ) { }
    async execute(): Promise<Users[]> {
        return await this.userRepo.find();

    }

}
