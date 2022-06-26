import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { UserCqrsModule } from './userCqrs/userCqrs.module';

@Module({
  // you can use ormconfig.json:
  imports: [UserCqrsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sapass',
    database: 'Idendity',
    entities: [Users],
    synchronize: false,
  }),],
})
export class AppModule { }
