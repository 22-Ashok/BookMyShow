import jwt from 'jsonwebtoken'
import AppError from './appError';

interface TokenData{
    id:string,
}

export function jsonToken(data:TokenData) : string {
    if(!process.env.SECRET_KEY) {
        console.log("key not present")
        throw new AppError("internal server error", 500);
    }

    const token = jwt.sign(data, `${process.env.SECRET_KEY}`, {expiresIn: "1w"} )
    return token;
}