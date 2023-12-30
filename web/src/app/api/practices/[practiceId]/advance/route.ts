import { NewPracticeSchema } from "@/lib/practice/newPractice";
import { generatePracticeOld } from "@/lib/practice/practiceService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    request: NextRequest,
    { params }: { params: { practiceId: string } }
    ) {
    // обработать HTTP запрос и вытащить из него данные
    const json = await request.json();
    const newPractice = NewPracticeSchema.parse(json);

    // вызвать бизнес-слой и получить от него результат
    const practice = await generatePracticeOld(newPractice);

    // из полученного результата сформировать HTTP ответ
    return NextResponse.json(practice);
}



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