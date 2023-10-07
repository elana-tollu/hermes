import { addCard, listAllCards } from '@/db/cardsRepository';
import { NewCardSchema } from '@/lib/newCard';
import { NewPracticeSchema } from '@/lib/practice/newPractice';
import { generatePractice } from '@/lib/practice/practiceService';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    // обработать HTTP запрос и вытащить из него данные
    const json = await request.json();
    const newPractice = NewPracticeSchema.parse(json);

    // вызвать бизнес-слой и получить от него результат
    const practice = await generatePractice(newPractice);

    // из полученного результата сформировать HTTP ответ
    return NextResponse.json(practice);
}
