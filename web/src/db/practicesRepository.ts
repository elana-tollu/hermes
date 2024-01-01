import { Row } from "postgres"
import sql from "./db"
import { CardOld } from "@/lib/cardOld"
import { NotFoundError } from "./errors"
import { Practice } from "@/lib/practice/practice"

export async function createPractice(practice: Practice): Promise<Practice> {
    const [insertedPractice] = await sql`
        insert into practices (
            practices_id,
            practices_current_card_id,
            practices_card_ids
        )
        values (
            ${practice.practiceId},
            ${practice.currentCardId},
            ${practice.cardIds}
        )
        returning *
    `

    return mapToPractice(insertedPractice);
}

export async function getPracticeById(practiceId: string): Promise<Practice> {
    const result = await sql`
        select * 
        from practices 
        where practices_id = ${practiceId}
    `
    if (result.length === 0) {
        throw new NotFoundError('Practice', practiceId); 
    }
    
    return mapToPractice(result[0]);
}

export async function updateCurrentCardId(practiceId: string, currentCardId: string): Promise<Practice> {
    const result = await sql`
        update practices 
        set practices_current_card_id = ${currentCardId}
        where practices_id = ${practiceId}
        returning *
    `
    if (result.length === 0) {
        throw new NotFoundError('Practice', practiceId); 
    }
    
    return mapToPractice(result[0]);
}

function mapToPractice(row: Row): Practice {
    return {
        practiceId: row['practices_id'],
        currentCardId: row['practices_current_card_id'],
        cardIds: row['practices_card_ids']
    }
}



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