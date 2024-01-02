import { Grade } from "@/lib/grade";
import { gradePractice } from "@/lib/practice/practiceService";
import { UuidSchema } from "@/lib/uuid";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(
    request: NextRequest,
    { params }: { params: { practiceId: string } }
) {
    const practiceId = UuidSchema.parse(params.practiceId)
    const json = await request.json();
    const gradeRequest = RequestSchema.parse(json);
    
    await gradePractice(practiceId, gradeRequest.grade);
    // из полученного результата сформировать HTTP ответ
    return NextResponse.json({});
}

const RequestSchema = z.object({
    grade: z.nativeEnum(Grade)
})
