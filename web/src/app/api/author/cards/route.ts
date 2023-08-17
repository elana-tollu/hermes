import { NextResponse } from 'next/server'

export async function GET(request: Request) {

    return NextResponse.json({ now: new Date().toISOString() })
}

export async function POST(request: Request) {
    const newCard = await request.json();
    console.log('newCard', newCard);

    return NextResponse.json({ now: new Date().toISOString() })
}