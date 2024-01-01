import { PracticeOld } from "@/lib/practice/practiceOld";
import { CardResponse, CardResponseSchema } from "./cardResponse";
import { PracticeResponse, PracticeResponseSchema } from "./practiceResponse";

export interface ApiGateway {
    generatePractice: () => Promise<string>
    getPractice: (practiceId: string) => Promise<PracticeResponse> 
    getCard: (cardId: string) => Promise<CardResponse>
    advancePractice: (practiceId: string) => Promise<void>
}

export class HttpApiGateway implements ApiGateway {
    async getCard (cardId: string) : Promise<CardResponse> {
        const response = await fetch(`/api/cards/${cardId}`);
        const responseBody = await response.json();
        return CardResponseSchema.parse(responseBody);
    }

    async getPractice(practiceId: string): Promise<PracticeResponse> {
        const response = await fetch(`/api/practices/${practiceId}`);
        const responseBody = await response.json();
        return PracticeResponseSchema.parse(responseBody);
    }
    
    async generatePractice(): Promise<string> {
        const response = await fetch('/api/practices', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });
        const responseBody = await response.json() as PracticeOld;
        return responseBody.practiceId;
    }

    async advancePractice(practiceId: string): Promise<void> {
        await fetch(`/api/practices/${practiceId}/advance`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        });
    }
}
