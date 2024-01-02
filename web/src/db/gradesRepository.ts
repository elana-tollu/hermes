import sql from "./db";
import { NewGradeRecord } from "@/lib/newGradeRecord";
import { GradeRecord } from "@/lib/gradeRecord";
import { Row } from "postgres";

export async function createGrade(gradeRecord: NewGradeRecord): Promise<GradeRecord> {
    const [insertedGradeRecord] = await sql`
        insert into grades (
            practices_id,
            cards_id,
            grades_grade
        )
        values (
            ${gradeRecord.practiceId},
            ${gradeRecord.cardId},
            ${gradeRecord.grade}
        )
        returning *
    `

    return mapToGradeRecord(insertedGradeRecord);
}

function mapToGradeRecord(row: Row): GradeRecord {
    return {
        gradeId: BigInt(row['grades_id']),
        practiceId: row['practices_id'],
        cardId: row['cards_id'],
        grade: row['grades_grade'],
        createdAt: row['grades_created_at']
    }
}
