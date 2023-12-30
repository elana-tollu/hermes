import { practiceById } from '@/lib/practice/practiceService';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { practiceId: string } }
) {
    const practice = await practiceById(params.practiceId);
    
    return NextResponse.json(practice);
}