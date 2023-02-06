import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class Analytics extends Model{
    @Column
    date : string

    @Column({defaultValue:1})
    view: Number
}
console.log('Analytics Table is OK')