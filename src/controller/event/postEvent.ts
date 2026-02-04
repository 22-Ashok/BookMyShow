import type {Request, Response, NextFunction} from "express"
import {prisma} from "../../lib/prisma"

export default async function postEvent(req:Request, res:Response, next:NextFunction){
   try{
     const {title,description,durationMin,eventType,lang,url} = req.body;
     const event = await prisma.event.create({
        data:{
            title,
            description,
            durationMin,
            eventType,
            lang,
            url
        }
     })

     return res.status(201).json({
        status:true,
        data:event,
        msg:"event added successfully"
     })
   }

   catch(err){
    console.log(err);
    next(err);
   }
}