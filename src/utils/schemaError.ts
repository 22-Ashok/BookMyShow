import { ZodError } from "zod"

export default function schemaError(error : ZodError){

  const zError : object[] = error.issues.map(err => {
    return {
        field:err.path.join('.'),
        msg:err.message
    }
  })
  
  return zError;
}
