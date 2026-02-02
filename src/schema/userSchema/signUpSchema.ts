import {z} from "zod";

export const signUpSchema = z.object({
    name : z.string().min(3).max(50).trim(),
    email : z.email(),
    password : z.string().min(5).max(14).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/).regex(/[^a-zA-Z0-9]/)
});