import type {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken"
import AppError from "../utils/appError";

interface UserPayload extends jwt.JwtPayload{
    id : string,
    role : string
}

export default function userAuth(req:Request, res:Response, next:NextFunction){
    try {  
      const authHeader = req.headers.authorization;

      if(!authHeader?.startsWith("Bearer ")){
        throw new AppError("Unauthorize", 401);
      }

      const token = authHeader.split(" ")[1];

      if(!token) {
        throw new AppError("unauthorize", 401);
      }

      const {id,role} = jwt.verify(token, process.env.SECRET_KEY as string) as UserPayload;
      req.user = {id,role};
      
      next();
    }

    catch(err){
      next(new AppError("unauthorize", 401));
    }
}