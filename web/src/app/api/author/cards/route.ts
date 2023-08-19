import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: Request) {

    return NextResponse.json({ now: new Date().toISOString() })
}

export async function POST(request: NextRequest) {
    const newCard = await request.json();
    console.log('newCard', newCard);

    return NextResponse.json({ now: new Date().toISOString() })
}