import {z} from "zod" 
 
 const userSchema = z.object({
    name: z.string().min(3).max(100).optional(),
    gender: z.enum(["MALE", "FEMALE", "TRANSGENDER"]).optional()
})

export default userSchema;