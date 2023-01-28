import { Table, Column, Model,DataType } from 'sequelize-typescript';

@Table
export class Ads extends Model{
    @Column
    username: string

    @Column
    adsTitle : string

    @Column
    region:string

    @Column
    localtion:string

    @Column
    phoneNo:string

    @Column
    intro : string

    @Column
    nationality : string

    @Column({type:DataType.ARRAY(DataType.STRING)})
    language : []

    @Column({type:DataType.JSON})
    appearance : {}

    @Column
    socialMedia : string

    @Column
    CurrencyType : string

    @Column({type:DataType.JSON})
    charge : {}

    @Column({type:DataType.JSON})
    service : {}
    
    @Column
    profilePhoto:string

    @Column({type:DataType.ARRAY(DataType.STRING)})
    gallery: []

    
    @Column({defaultValue:1})
    view : Number

    
    @Column({defaultValue:true})
    visibility : boolean

    @Column({type:DataType.JSON})
    review : {}

    @Column({type:DataType.JSON})
    qna : {}


}