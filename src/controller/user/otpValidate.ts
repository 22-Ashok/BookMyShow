import type {Request, Response, NextFunction} from "express"
import radis from "../../lib/redis"
import {z} from "zod";
import { prisma } from "../../lib/prisma";
import {jsonToken} from "../../utils/jsonToken"

export default async function otpValidate(req:Request, res:Response, next:NextFunction){
   try{
     // check for schema
        const inputSchrma = z.object({
            email: z.email(),
            otp: z.string().length(4)
        })
        
        const {email,otp} = inputSchrma.parse(req.body);
        const key:string = `otp_attemps:${email}`;
        const count = await radis.incr(key);

       // radis.del(key);
        if(count === 1){
           await radis.expire(key, 120);
        }

        // limit opt entry if user input wrong otp
        if(count > 5){
            return res.status(429).json({
                status:false,
                msg:"too many attempt.."
            })
        }

        const otpkey = await radis.get(`otp:${email}`);

        if(otpkey === null || otpkey !== otp){
            return res.status(400).json({
                status:false,
                msg:"invalid otp or expire"
            })
        }

        // create the user also checks if the user exsists or not

        const user = await prisma.user.upsert({
            where:{email},
            update:{},
            create:{email},
            omit:{
                created_at:true,
                updated_at:true,
            }
        });

        radis.del(`otp:${email}`);
        radis.del(key);

        return res.status(201).json({
            status:true,
            token:jsonToken({id:user.id, role:user.role}),
            data:user,
            msg:"user created successfully"
        })
   }

   catch(err){
    console.log(err);
    next(err);
   }
}