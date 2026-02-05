import type {Request, Response, NextFunction} from "express";
import AppError from "../../utils/appError";
import { prisma } from "../../lib/prisma";

export default async function addVenue(req:Request, res:Response, next:NextFunction){
   try{
     const role = req.user.role;
     console.log(role);
     if(role !== "ADMIN"){
        throw new AppError("Unauthorize", 403);
     }

     const venue = await prisma.venue.create({
        data: req.body,
        omit:{
            created_at:true,
            updated_at:true
        }
     });

     console.log(venue);

     return res.status(201).json({
        status:true,
        data:venue,
        msg:"venue created successfully"
     });
   }

   catch(err){
     console.log(err);
     next(err);
   }
}