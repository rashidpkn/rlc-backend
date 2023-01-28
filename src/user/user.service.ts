import { Injectable } from '@nestjs/common';
import { User } from 'src/database/model/user.entity';


@Injectable()
export class UserService {

    create = async (username : string,email : string,password:string)=>{
        try {
            const found = await User.findOne({where:{email}})
        if(found){
            return {
                status:false,
                reason:'User already exist'
            }
        }else{
            await User.create({username,email,password})
            
            return {
                status:true,
                reason:'User is created'
            }
        }
        } catch (error) {
         return{
            status:false,
            reason:error.message
         }   
        }
    }

    login = async (email:string,password:string)=>{
        try {
            const found = await User.findOne({where:{email,password}})
            if(found){
                return{
                    status:true,
                    reason:""
                }
            }else{
                return{
                    status:false,
                    reason:"User not Exist"
                }
            }
        } catch (error) {
            return{
                status:false,
                reason: error.message
            }
        }
    }

    delete = async ()=>{

    }

    verify = async ()=>{

    }

}
