export const name = 'Add table grades'

export async function transaction(sql){
    await sql`
        CREATE TABLE grades (
            grades_id BIGSERIAL PRIMARY KEY,
            practices_id UUID NOT NULL REFERENCES practices (practices_id),
            cards_id UUID NOT NULL,
            grades_grade TEXT NOT NULL,
            grades_created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
            UNIQUE (practices_id, cards_id)
        )
    `
}