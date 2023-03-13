import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { Ads } from 'src/database/model/ads.entity';
import { Bid } from 'src/database/model/bid.entity';
import { BidService } from './bid.service';

@Controller('bid')
export class BidController {
  constructor(private readonly bidService: BidService) { }

  @Post()
  async create(
    @Body() body: any
  ) {
    
    const { tier, position } = body

    try {
      if (tier && position <= 6) {
        const found = await Bid.findOne({ where: { tier, position } })
        if (found) {
          await Bid.update({ bid: null, largestBidAmount: 50, status: "open" }, { where: { position, tier } })
          return {
            status: true,
            message: "Position reopened"
          }
        }
        else {
          await Bid.create({ tier, position })
          return true
        }
      } else {
        throw new HttpException("UNPROCESSABLE_ENTITY", HttpStatus.UNPROCESSABLE_ENTITY)
      }
    } catch (error) {
      console.log(error.message);
      return error
    }
  }

  @Get()
  async get() {
    return await Bid.findAll({ order: ['position'] })
  }

  @Post('auction')
  async auction(
    @Body() body: any
  ) {
    const { amount, adsTitle, bid, id, largestBidAmount, baseAmount } = body
    try {
      if (bid) {
        if (largestBidAmount < amount) {
          await Bid.update({
            bid: [...bid, { amount, adsTitle }],
            baseAmount: largestBidAmount + 10,
            largestBidAmount: amount,
          },
            { where: { id } })

        } 
        // else if (lastBidAmount < amount) {

        //   await Bid.update({
        //     bid: [...bid, { amount, adsTitle }],
        //     lastBidAmount: amount,
        //     baseAmount: baseAmount + 10
        //   },
        //     { where: { id } })

        // } 
        else {
          await Bid.update({
            bid: [...bid, { amount, adsTitle }],
            // lastBidAmount: amount,
            baseAmount: amount + 10
          },
            { where: { id } })
        }

      } else {
        await Bid.update({
          bid: [{ amount, adsTitle }],
          largestBidAmount: amount,
          baseAmount: baseAmount + 10
        },
          { where: { id } })
      }
      return true
    } catch (error) {
      console.log(error.message);
      return false
    }

  }


  @Post('close')
  closeBid(
    @Body() body:any
  ){
      const {id,bid,largestBidAmount,position,tier} = body
      const  {adsTitle} =  bid.find((e: { amount: any; })=> e.amount===largestBidAmount)
      Ads.update({tier},{where:{adsTitle}})
      Bid.update({status:'close'},{where:{id}})
  }

  @Post('renew')
  renew(){
    Ads.update({tier:'none'},{where:{}}),
    Bid.update({status:'close',bid:null,largestBidAmount:50,baseAmount:50},{where:{}})
    return true;
  }


}
