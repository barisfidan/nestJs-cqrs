import { Body, Controller, Get, HttpCode, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserRequest } from './queries/dto/userRequest';
import { GetUsersQuery } from './queries/impl/get-users.query';
import { GetUsersByNameQuery } from './queries/impl/get-usersByName';

@Controller('userCqrs')
export class UserCqrsController {
    constructor(private readonly queryBus: QueryBus
    ) { }

    @Get()
    async getAll() {
        return await this.queryBus.execute(new GetUsersQuery());
    }
    @Post('getByUser')
    async findOne(@Body() body: UserRequest) {
        return await this.queryBus.execute(new GetUsersByNameQuery(body));
    }

}
