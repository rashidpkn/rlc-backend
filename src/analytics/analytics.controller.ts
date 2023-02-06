import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Ads } from 'src/database/model/ads.entity';
import { Analytics } from 'src/database/model/analytics.entity';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}
  @Post()
    async add(
    ){
     
      return this.analyticsService.add()
    }

  @Get()
  async getAnalytics(){
    return await Analytics.findAll()
  }
  @Post('profile')
  async addAnalytics(
    @Body('id')  id : Number
  ){
    return this.analyticsService.addAnalytics(id)
  }

  @Get('profile')
  async getProfileAnalytics(
    @Query('id') id :Number
  ){
    return (await Ads.findOne({where:{id}})).analytics
  }
}
