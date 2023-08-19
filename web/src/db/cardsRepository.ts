import sql from "./db"

export interface NewCard {
    native: string
    foreign: string
}

export interface Card {
    id: string
    native: string
    foreign: string
    createdAt: Date
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

    const card = result[0];

    return {
        id: card['cards_id'],
        native: card['cards_native'],
        foreign: card['cards_foreign'],
        createdAt: card['cards_created_at']
    }

}