import type {Request, Response, NextFunction} from "express";
import {prisma} from "../../lib/prisma"

export default async function editProfile(req:Request, res:Response, next:NextFunction){
   try{
    const id = req.user.id;
    console.log(req.body);
     const user = await prisma.user.update({
        where : {id},
        data: req.body,
        omit:{
         created_at:true,
         updated_at:true
        }
     });

     return res.status(200).json({
        status:true,
        data:user,
        msg:"user updated successfully"
     })
   }

   catch(err){
     next(err);
   }
}