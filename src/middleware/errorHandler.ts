import type {Request, Response, NextFunction} from 'express'
import { ZodError } from 'zod'
import schemaError from '../utils/schemaError'

export default function errorHandler(err:any, req:Request, res:Response, next:NextFunction){

    if(err instanceof ZodError) {
        return res.status(400).json({
            status:false,
            msg: schemaError(err)
        })
    }

    else if(err.statusCode) {
        return res.status(err.statusCode).json({
            status:false,
            msg:err.message
        })
    }

    else {
        console.log(err)
        return res.status(500).json({
            status:false,
            msg:"Internal Server Error"
        })
    }
}