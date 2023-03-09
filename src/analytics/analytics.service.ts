import { Injectable } from '@nestjs/common';
import { Ads } from 'src/database/model/ads.entity';
import { Analytics } from 'src/database/model/analytics.entity';

@Injectable()
export class AnalyticsService {
    async add() {
        const dates = new Date()
        const date = `${dates.getDate()}-${dates.getMonth() + 1}-${dates.getFullYear()}`
        // const date = '10-3-2023'
        const found = await Analytics.findOne({ where: { date } })
        if (found) {
            Analytics.increment('view', { by: 1, where: { date } })
        } else {
            Analytics.create({ date })
        }
        return {
            status: true
        }
    }

    async addAnalytics(id: Number) {
        const dates = new Date()
        const date = `${dates.getDate()}-${dates.getMonth() + 1}-${dates.getFullYear()}`
        const found = (await Ads.findOne({ where: { id } }))
        let adsAnalytics = found.analytics
        if (adsAnalytics.find(e => e.date === date)) {
            const index = adsAnalytics.findIndex(e => e.date === date)
            adsAnalytics[index].view = adsAnalytics[index].view + 1
            await Ads.update({ analytics:adsAnalytics}, { where: { id } })
        } 
        else {
            Ads.update({
                analytics: [...adsAnalytics,{
                        date,
                        view: 1
                    }]
            }, { where: { id } })
        }
        return true
    }
}
