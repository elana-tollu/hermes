import { Row } from "postgres"
import sql from "./db"
import { Card } from "@/lib/card"
import { NotFoundError } from "./errors"

export interface NewCard {
    native: string
    foreign: string
}

export async function addCard(newCard: NewCard): Promise<Card> {
    const result = await sql`
        insert into cards (
            cards_native, 
            cards_foreign
        ) values (
            ${newCard.native},
            ${newCard.foreign}
        ) 
        returning *
    `

    return mapToCard(result[0]);
}

export async function listAllCards() {
    const result = await sql`
        select * 
        from cards 
        order by cards_created_at desc
    `
    
    return result.map(mapToCard)
}

export async function getCardById(cardId: string) {
    const result = await sql`
        select * 
        from cards 
        where cards_id = ${cardId}
    `
    if (result.length === 0) {
        throw new NotFoundError('Card', cardId); 
    }
    
    return mapToCard(result[0]);
}

function mapToCard(row: Row): Card {
    return {
        id: row['cards_id'],
        native: row['cards_native'],
        foreign: row['cards_foreign'],
        createdAt: row['cards_created_at']
    }
}