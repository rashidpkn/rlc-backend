import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table
export class Blacklist extends Model{
    @Column
    adsId : number

    @Column
    adsTitle : string

    @Column
    message:string

    
    

    @Column({type:DataType.ARRAY(DataType.JSON)})
    vote:[{
        username:string,
        response:boolean
    }]
}
console.log('Blacklist Table is OK')