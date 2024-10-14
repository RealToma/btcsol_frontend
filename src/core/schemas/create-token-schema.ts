import { z } from "zod";

export const createTokenSchema = z.object({
  name: z.string(),
  symbol: z.string(),
  image: z.string(),
  description: z.string(),
})
export type CreateTokenSchema = z.infer<typeof createTokenSchema>
