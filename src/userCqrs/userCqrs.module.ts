import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { UserCqrsController } from './userCqrs.controller';
import { GetUsersHandler } from './queries/handlers/get-users-handler';
import { GetUsersByNameHandler } from './queries/handlers/get-usersByName-handler';

@Module({
    imports: [TypeOrmModule.forFeature([Users]), CqrsModule],
    controllers: [UserCqrsController],
    providers: [GetUsersByNameHandler, GetUsersHandler]
})
export class UserCqrsModule { }
