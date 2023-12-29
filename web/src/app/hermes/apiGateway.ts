import { PracticeOld } from "@/lib/practice/practiceOld";
import { Practice, PracticeSchema } from "@/lib/practice/practise";

export interface ApiGateway {
    generatePractice: () => Promise<string>
    getPractice: (practiceId: string) => Promise<Practice> 
}

export class HttpApiGateway implements ApiGateway {
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
