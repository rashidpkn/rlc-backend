import { Injectable } from '@nestjs/common';
import { Ads } from 'src/database/model/ads.entity';

@Injectable()
export class AdsService {
    create(ads: JSON, username: string, email: string) {
        try {
            Ads.create({ ...ads, username, email }).catch(error=>{
                console.log(error.message)
                return ({
                    status: false,
                    reason: error.message
                })
            })
           
            return ({
                status: true,
                reason: 'Ads is created'
            })
        } catch (error) {
            console.log(error.message)
            return ({
                status: false,
                reason: error.message
            })
        }

    }
}
