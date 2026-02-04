import type {Request, Response, NextFunction} from "express"
import {z} from "zod" 
import otpGenerator from "otp-generator"
import redis from "../../lib/redis";
import sendOtpMail from "../../utils/sendOtpMail";

export default async function otpGen(req:Request, res:Response, next:NextFunction){
    try{
        const {email} = req.body;
        const emailSchema = z.email();

        emailSchema.parse(email);
        const otp : string = otpGenerator.generate(4, {digits:true, lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });

        sendOtpMail(email, otp);  // sending mail
        await redis.set(`otp:${email}`, otp, "EX", 90); // store here into redis

        return res.status(200).json({
            status:true,
            msg:"otp send successfully"
        })
    }

    catch(err){
        console.log(err);
        next(err);
    }
}