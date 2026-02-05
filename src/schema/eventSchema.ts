import {z} from "zod";

const eventSchrma = z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(500).optional(),
    durationMin: z.number().min(30).max(500),
    eventType: z.enum(["MOVIE", "CONCERT", "PLAY"]),
    lang: z.enum(["ENGLISH", "HINDI", "HINGLISH"]),
    url: z.url().optional()
})

export default eventSchrma;