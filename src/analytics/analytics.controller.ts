import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
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
    @Body('id')  id : number
  ){
    try {
      if(!isNaN(id)) return this.analyticsService.addAnalytics(id)
      else throw new HttpException('Please provide all data',HttpStatus.UNPROCESSABLE_ENTITY)
      
    } catch (error) {
      throw new HttpException('Please provide all data',HttpStatus.UNPROCESSABLE_ENTITY)
      
      
    }
  }

  @Get('profile')
  async getProfileAnalytics(
    @Query('id') id :Number
  ){
    if(id) return (await Ads.findOne({where:{id}})).analytics 
    else throw new HttpException('Please provide all data',HttpStatus.UNPROCESSABLE_ENTITY)
    
  }
}
