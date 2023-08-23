import { getCardById } from '@/db/cardsRepository';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { cardId: string } }
) {
    const card = await getCardById(params.cardId);
    
    return NextResponse.json(card);
}