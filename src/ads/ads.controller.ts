import { Controller } from '@nestjs/common';
import { Delete, Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { Ads } from 'src/database/model/ads.entity';
import { AdsService } from './ads.service';

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) { }

  @Post('create')
  create(
    @Body('ads') ads: JSON,
    @Body('username') username: string,
    @Body('email') email: string
  ) {

    return this.adsService.create(ads, username, email)
  }

  @Get('get-all-ads')
  getAllAds() {
    return Ads.findAll()
  }

  @Get('get-user-ads')
  getUserAds(
    @Query('username') username: string
  ) {
    return Ads.findAll({ where: { username } })
  }

  @Get('get-a-ads')
  getAAds(
    @Query('adsTitle') adsTitle: string
  ) {
    Ads.increment('view', { by: 1, where: { adsTitle } },)
    return Ads.findOne({ where: { adsTitle } })
  }

  @Get('get-by-id')
  getById(
    @Query('id') id: number
  ) {
    Ads.increment('view', { by: 1, where: { id } },)
    return Ads.findOne({ where: { id } })
  }

  @Post('delete')
  delete(
    @Body('adsTitle') adsTitle: string
  ) {
    Ads.destroy({ where: { adsTitle } })
    return {
      status: true,
      reason: 'Ads is Deleted'
    }
  }

  @Post('block')
  block(
    @Body('adsTitle') adsTitle: string
  ) {
    Ads.update({ visibility: false }, { where: { adsTitle } })
    return {
      status: true,
      reason: 'Ads is Blocked'
    }
  }

  @Post('unblock')
  unBlock(
    @Body('adsTitle') adsTitle: string
  ) {
    Ads.update({ visibility: true }, { where: { adsTitle } })
    return {
      status: true,
      reason: 'Ads is UnBlocked'
    }
  }

}
