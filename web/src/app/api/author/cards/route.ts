import { addCard, listAllCards } from '@/db/cardsRepository';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const newCard = await request.json();
    console.log('newCard', newCard);
    const card = await addCard({
        native: 'mouse',
        foreign: 'Ilia'
    });

    return NextResponse.json(card);
}

export async function GET() {
    const cards = await listAllCards();
    
    return NextResponse.json(cards);
}
