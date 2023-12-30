import { z } from "zod";


export const SampleSchema = z.object({
    text: z.string(),
    audioUrl: z.string().url(),
    imageUrl: z.string().url()
}).partial()

export const CardResponseSchema = z.object({
    cardId: z.string(),
    task: z.string(),
    sideA: SampleSchema,
    sideB: SampleSchema
});

export type CardResponse = z.infer<typeof CardResponseSchema>;