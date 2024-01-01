import { practiceById } from '@/lib/practice/practiceService';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { practiceId: string } }
) {
    const practice = await practiceById(params.practiceId);
    const currentCardNumber = practice.cardIds.indexOf(practice.currentCardId) + 1;
    const totalCards = practice.cardIds.length;
    const response = {...practice, totalCards, currentCardNumber };
    
    return NextResponse.json(response);
}