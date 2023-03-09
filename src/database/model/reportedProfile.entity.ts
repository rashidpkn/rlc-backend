import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class Report extends Model{
    @Column
    adsTitle:string

    @Column
    username:string

    @Column
    reason:string

}
console.log('Report Profile Table is OK')