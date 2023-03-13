import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Bid extends Model{
    @Column
    position : number

    @Column
    tier  : string

    @Column ({ type:DataType.ARRAY(DataType.JSON),defaultValue:[]})
    bid : [
        {
            adsTitle:string,
            amount:number,
        }
    ]

    @Column({defaultValue:50})
    largestBidAmount : number

    @Column({defaultValue:"close"})//open , close , 
    status : string

    @Column({defaultValue:50})
    baseAmount : number

}

console.log('Bid Table is OK');