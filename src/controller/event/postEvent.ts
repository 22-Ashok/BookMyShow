import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../lib/prisma";
import AppError from "../../utils/appError";

export default async function postEvent(req:Request, res:Response, next:NextFunction){
   try{
    const role = req.user.role;

    if(role !== "ADMIN"){
        throw new AppError("Unauthorize", 403);
    }

    const event = await prisma.event.create({
        data: req.body,
        omit:{
            created_at:true,
            updated_at:true
        }
    });

    return res.status(201).json({
        status:true,
        data: event,
        msg:"event created successfully"
    });

   }

   catch(err){
      console.log(err);
      next(err);
   }
}