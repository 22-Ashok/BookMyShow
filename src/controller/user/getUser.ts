import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../lib/prisma";
import AppError from "../../utils/appError";

export default async function getUser(req:Request, res:Response, next:NextFunction){
    try{
    console.log("hii there");

      const id = req.user.id;
      
      const user = await prisma.user.findUnique({
        where: {id},
        omit:{
            created_at:true,
            updated_at:true
        }
      });

      if(!user){
        throw new AppError("user not found", 404);
      }

      return res.status(200).json({
        status:true,
        data:user,
        msg:"success"
      })

    }

    catch(err){
        next(err);
    }
}
