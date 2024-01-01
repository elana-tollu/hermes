export const name = 'Add table practices'

export async function transaction(sql){
    await sql`
        CREATE TABLE practices (
            practices_id UUID PRIMARY KEY,
            practices_current_card_id UUID NOT NULL,
            practices_card_ids JSON NOT NULL,
            practices_created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    `
}