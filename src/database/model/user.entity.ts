import { Table, Column, Model,Default } from 'sequelize-typescript';

@Table
export class User extends Model{
    @Column
    username: string

    @Column
    email:string

    @Column
    password:string

   
    @Column({defaultValue:'user'})
    role:string

    
    @Column({defaultValue:false})
    verified:boolean



}