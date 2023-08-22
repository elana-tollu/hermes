import { addCard, listAllCards } from '@/db/cardsRepository';
import { NewCardSchema } from '@/lib/newCard';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const json = await request.json();
    const result = NewCardSchema.safeParse(json);
    if (!result.success) {
        return NextResponse.json(result.error, {status: 400});
    }
    const card = await addCard(result.data);

    return NextResponse.json(card);
}

export async function GET() {
    const cards = await listAllCards();
    
    return NextResponse.json(cards);
}
