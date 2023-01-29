import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { Ads } from 'src/database/model/ads.entity';

@Injectable()
export class AdsService {
    create(ads: JSON, username: string, email: string) {
        try {
            Ads.create({ ...ads, username, email })
            return ({
                status: true,
                reason: 'Ads is created'
            })
        } catch (error) {
            return ({
                status: false,
                reason: error.message
            })
        }

    }
}
