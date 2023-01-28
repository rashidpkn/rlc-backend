import { Injectable } from '@nestjs/common';
import { User } from 'src/database/model/user.entity';


@Injectable()
export class UserService {

    create = async (username : string,email : string,password:string)=>{
        try {
            const found = await User.findOne({where:{email}})
        if(found){
            return {
                status:true,
                reason:'User is created'
            }
        }else{
            await User.create({username,email,password})
            return {
                status:false,
                reason:'User already exist'
            }
        }
        } catch (error) {
         return{
            status:false,
            reason:error.message
         }   
        }
    }

    login = async ()=>{

    }

    delete = async ()=>{

    }

    verify = async ()=>{

    }

}
