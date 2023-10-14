import { Row } from "postgres"
import sql from "./db"
import { CardOld } from "@/lib/cardOld"
import { NotFoundError } from "./errors"

interface CardAndCaseId {
    cardId: string
    caseIndex: string
}

export interface NewPractice {
    cards: CardAndCaseId[]
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

function mapToCard(row: Row): CardOld {
    return {
        id: row['cards_id'],
        native: row['cards_native'],
        foreign: row['cards_foreign'],
        createdAt: row['cards_created_at']
    }
}