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

    async writeReview(id:number,username:string,rating:number,title:string,desc : string){
        const found = await Ads.findOne({where:{id}})
        
        if(found){
          const {review} = found
          await Ads.update({review:[...review,{username,rating,title,desc}]},{where:{id}})
        }
        return true
    
      }
}
