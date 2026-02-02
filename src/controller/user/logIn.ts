import type {Request, Response, NextFunction} from "express"
import { prisma } from "../../lib/prisma"
import AppError from "../../utils/appError";
import bcrypt from "bcrypt"
import { jsonToken } from "../../utils/jsonToken";

interface UserData {
    id:string,
    name:string,
};

export default async function logIn(req:Request, res:Response, next:NextFunction){
   try{
      const {email,password} = req.body;

      const user = await prisma.user.findUnique({
        where:{
            email
        }
      })

      if(user === null){
        throw new AppError("user not found", 404);
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if(!validPassword){
        throw new AppError("invalid email or password", 401);
      }

      const token = jsonToken({id:user.id})
      const {id,name} : UserData = user

      return res.status(200).json({
        status:true,
        data:{
            token,
            user:{
                id,
                name,
                email
            }
        },
        msg:"user login successfully"
      })
   } 

   catch(err){
     console.log(err);
     next(err);
   }
}