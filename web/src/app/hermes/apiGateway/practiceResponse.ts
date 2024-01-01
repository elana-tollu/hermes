import { z } from "zod";

export const PracticeResponseSchema = z.object({
    practiceId: z.string(),
    currentCardId: z.string(),
    currentCardNumber: z.number(),
    totalCards: z.number()
});

export type PracticeResponse = z.infer<typeof PracticeResponseSchema>;