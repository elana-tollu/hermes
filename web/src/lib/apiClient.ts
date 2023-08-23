import { getCardById } from "@/db/cardsRepository";
import { Card } from "./card";
import { NewCard } from "./newCard";

export interface ApiGateway {
    addNewCard: (newCard: NewCard) => Promise<void>
    listAllCards: () => Promise<Card[]>
    getCardById: (cardId: string) => Promise<Card> 
}

class HttpApiGateway implements ApiGateway {
    async addNewCard(newCard: NewCard): Promise<void> {
        await fetch('/api/author/cards', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCard),
        });
    }

    async listAllCards(): Promise<Card[]> {
        const response = await fetch('/api/author/cards');
        const json = await response.json();
        return json;
    }

    async getCardById(cardId: string): Promise<Card> {
        const response = await fetch(`/api/author/cards/${cardId}`);
        const json = await response.json();
        return json;
    }

}

export const apiGateway = new HttpApiGateway();