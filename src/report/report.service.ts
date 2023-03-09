import { Injectable } from '@nestjs/common';
import { Ads } from 'src/database/model/ads.entity';
import { Report } from 'src/database/model/reportedProfile.entity';

@Injectable()
export class ReportService {
    deleteReport(id:number){
        Report.destroy({where:{id}})
        return true
    }
    deleteAds(adsTitle:string){
        Ads.destroy({where:{adsTitle}})
        return true
    }
}
