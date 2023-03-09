import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class Banners extends Model{
    @Column
    username:string

    @Column
    url:string

    @Column
    status:boolean

}
console.log('Banners Table is OK')