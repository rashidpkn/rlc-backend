import { Body, Controller, Get, Post } from '@nestjs/common';
import { Ads } from 'src/database/model/ads.entity';
import { VerifyService } from './verify.service';

@Controller('verify')
export class VerifyController {
  constructor(private readonly verifyService: VerifyService) {}
  @Post('/request')
  async verifyRequest(
    @Body('id') id :number,
    @Body('verificationImage') verificationImage :string,
  ){
    await Ads.update({verificationImage,verificationRequest:true},{where:{id}})
    return true
  }

  @Get('')
  async getAllRequest(){
    return await Ads.findAll({where:{verificationRequest:true}})
  }

  @Post('verify')
  async verify(
    @Body('id') id :number,
  ){
    await Ads.update({verificationRequest:false,verify:true},{where:{id}})

  }
  @Post('unverify')
  async unVerify(
    @Body('id') id :number,
  ){
    await Ads.update({verificationRequest:false,verify:false},{where:{id}})

  }



}
