import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { practiceId: string } }
) {
    const practice = {
        practiceId: params.practiceId,
        currentCardId: 'CA1',
        currentCardNumber: 9,
        totalCards: 33
    };
    
    return NextResponse.json(practice);
}