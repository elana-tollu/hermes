import { advancePractice } from "@/lib/practice/practiceService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    request: NextRequest,
    { params }: { params: { practiceId: string } }
) {
    await advancePractice(params.practiceId);
    // из полученного результата сформировать HTTP ответ
    return NextResponse.json({});
}
