import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../lib/prisma";
import AppError from "../../utils/appError";

async function addShow(req:Request, res:Response, next:NextFunction){
    try{
      const role = req.user.role;

      if(role !== "ADMIN"){
        throw new AppError("Unauthorize", 403);
      }
    }

    catch(err){
        console.log(err);
        next(err);
    }
}