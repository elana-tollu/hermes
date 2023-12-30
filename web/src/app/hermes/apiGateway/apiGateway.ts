import { Card } from "@/lib/card";
import { PracticeOld } from "@/lib/practice/practiceOld";
import { Practice, PracticeSchema } from "@/lib/practice/practise";
import { CardResponse, CardResponseSchema } from "./cardResponse";

export interface ApiGateway {
    generatePractice: () => Promise<string>
    getPractice: (practiceId: string) => Promise<Practice> 
    getCard: (cardId: string) => Promise<CardResponse>
}

export class HttpApiGateway implements ApiGateway {
    async getCard (cardId: string) : Promise<CardResponse> {
        const response = await fetch(`/api/cards/${cardId}`);
        const responseBody = await response.json();
        return CardResponseSchema.parse(responseBody);
    }

    async getPractice(practiceId: string): Promise<Practice> {
        const response = await fetch(`/api/practices/${practiceId}`);
        const responseBody = await response.json();
        return PracticeSchema.parse(responseBody);
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
}
