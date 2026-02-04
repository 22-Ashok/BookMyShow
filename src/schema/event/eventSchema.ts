import {z} from "zod";

const eventSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().optional(),
    duration: z.number().min(30).max(500),
    eventType: z.enum(["MOVIE", "CONCERT", "PLAY"]),
    lang : z.enum(["ENGLISH", "HINDI", "HINGLISH"]),
    url: z.string().optional()
})

export default eventSchema