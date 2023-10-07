import { z } from "zod";

export const NewPracticeSchema = z.object({
});

export type NewPractice = z.infer<typeof NewPracticeSchema>;