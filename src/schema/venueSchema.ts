import {z} from "zod";

const venueSchema = z.object({
    name: z.string().min(1).max(100),
    city: z.string().min(1).max(100),
    address: z.string().min(1).max(500)
})

export default venueSchema;