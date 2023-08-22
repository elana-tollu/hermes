import { z } from "zod";

export const NewCardSchema = z.object({
    foreign: z.string().min(1),
    native: z.string().min(1),
});

export type NewCard = z.infer<typeof NewCardSchema>;
  