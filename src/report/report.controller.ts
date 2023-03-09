import { Body, Controller, Get, Post } from '@nestjs/common';
import { Report } from 'src/database/model/reportedProfile.entity';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Post()
  async createReport(
    @Body('adsTitle') adsTitle:string,
    @Body('username') username:string,
    @Body('reason') reason : string
  ){
      await Report.create({adsTitle,username,reason})
      return true
  }

  @Get('')
  async getReport(){
    return await Report.findAll()
  }

  @Post('/delete-report')
  async deleteReport(
    @Body('id') id: number
  ){
    this.reportService.deleteReport(id)
    return true
  }

  @Post('/delete-ads')
  async deleteAds(
    @Body('id') id: number,
    @Body('adsTitle') adsTitle : string
  ){
    this.reportService.deleteReport(id)
    this.reportService.deleteAds(adsTitle)
  }


}
