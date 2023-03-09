import { Body, Controller, Get, Post } from '@nestjs/common';
import { Banners } from 'src/database/model/banner.entity';
import { User } from 'src/database/model/user.entity';
import { BannerService } from './banner.service';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  async postBanner(
    @Body('username') username : string,
    @Body('url') url : string
  ){
      await Banners.create({username,url})
      return true
  }

  @Get()
  async getBanner(){
    return await Banners.findAll()
  }

  @Post('approve')
  async apporoveBanner(
    @Body('username') username : string,
    @Body('id') id : number
  ){
    await User.increment('credit',{by:10,where:{username}})
    Banners.update({status:true},{where:{id}})
    return true
  }

  @Post('refuse')
  refuseBanner(
    @Body('id') id : number
  ){
    Banners.update({status:false},{where:{id}})
    return false
  }

}
