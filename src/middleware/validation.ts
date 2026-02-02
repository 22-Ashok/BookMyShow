import { ZodType } from "zod";
import type {Request, Response, NextFunction } from 'express'

export default function validation(schema : ZodType) {
   return (req:Request, res:Response, next:NextFunction) => {
       try{
         req.body = schema.parse(req.body);
         next();
       }

       catch(err){
         next(err);
       }
   }
}
