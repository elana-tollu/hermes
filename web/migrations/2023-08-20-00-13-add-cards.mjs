export const name = 'Add table cards'

export async function transaction(sql){
    await sql`
        CREATE TABLE cards (
            cards_id BIGSERIAL PRIMARY KEY,
            cards_native TEXT NOT NULL,
            cards_foreign TEXT NOT NULL,
            cards_created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    `
}