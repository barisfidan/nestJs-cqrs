import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column({ default: true })
    Status: boolean;
}