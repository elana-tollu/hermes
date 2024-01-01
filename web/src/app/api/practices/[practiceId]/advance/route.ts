import { NewPracticeSchema } from "@/lib/practice/newPractice";
import { advancePractice, generatePracticeOld } from "@/lib/practice/practiceService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    request: NextRequest,
    { params }: { params: { practiceId: string } }
) {
    await advancePractice(params.practiceId);
    // из полученного результата сформировать HTTP ответ
    return NextResponse.json({});
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