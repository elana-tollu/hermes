import { z } from "zod";

export const PracticeSchema = z.object({
    practiceId: z.string(),
    currentCardId: z.string(),
    currentCardNumber: z.number(),
    totalCards: z.number()
});

export type Practice = z.infer<typeof PracticeSchema>;
  