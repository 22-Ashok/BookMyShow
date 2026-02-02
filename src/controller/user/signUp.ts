import type {Request, Response, NextFunction} from "express"
import bcrypt from "bcrypt"
import { prisma } from "../../lib/prisma"
import AppError from "../../utils/appError";
import { jsonToken } from "../../utils/jsonToken";

export default async function signUp(req:Request, res:Response, next:NextFunction) : Promise<any> {
   try{
    const {name,email,password} = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data:{
        name,
        email,
        password:hashPassword
      }
    })

    // creating the token 
    const token = jsonToken({
      id:user.id,
    })

    return res.status(201).json({
      status:true,
      data:{
        token,
        user
      },
      msg:"user created successfully"
    })
    
   }

   catch(err : any){
    console.log(err.code);
     if(err.code === "P2002"){
      next(new AppError("user already exsist", 409));
     }
     next(err);
   }
}