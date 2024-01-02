import { Grade } from "./grade"

export interface GradeRecord {
    gradeId: bigint
    practiceId: string
    cardId: string
    grade: Grade
    createdAt: Date
};