import { getCard } from '@/lib/practice/practiceService';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { cardId: string } }
) {
  const card = await getCard(params.cardId);

  return NextResponse.json(card);
}