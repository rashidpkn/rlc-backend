import { Body, Controller, Get, Post } from '@nestjs/common';
import { Blacklist } from 'src/database/model/blacklist.entity';
import { BlacklistService } from './blacklist.service';

@Controller('blacklist')
export class BlacklistController {
  constructor(private readonly blacklistService: BlacklistService) {}
  @Post()
  async create(
    @Body('id') id :string,
    @Body('username') username :string,
    @Body('message') message : string,
    @Body('adsTitle') adsTitle : string,

  ){
    try {
      const found = await Blacklist.findOne({where:{adsTitle}})
      if(!found)
      {
        await Blacklist.create({adsId:id,adsTitle,message,vote:[{username,response:true}]})
        return true
      }else{
        return false
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  @Get()
  async get(){
    try {
      return await Blacklist.findAll()
    } catch (error) {
      console.log(error.message);
    }
  }

  @Post('/vote')
  async vote(
    @Body('id') id : number,
    @Body('username') username: string,
    @Body('response') response : boolean
  ){
    try {
      const found =  await Blacklist.findOne({where:{id},raw:true})
      const {vote} = found
      if(!vote.find(e=>e.username===username)){
          Blacklist.update({vote:[...vote,{username,response}]},{where:{id}})
          return true
      }else{
        return false
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  @Post('/delete')
  delete(
    @Body('id') id : number,
  ){
    try {
      Blacklist.destroy({where:{id}})
      return true
    } catch (error) {
      console.log(error.message);
      return false
    }
  }

}
