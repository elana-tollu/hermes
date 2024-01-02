import { useContext } from "react"
import { HermesContext } from "./HermesContext"
import { atom, useAtom } from "jotai";
import { PracticeResponse } from "./apiGateway/practiceResponse";
import { Grade } from "@/lib/grade";

const practiceAtom = atom<PracticeResponse | null>(null);

export function usePracticeRepository() {
    const {generatePractice, getPractice, advancePractice, postGrade} = useContext(HermesContext);
    const [practice, setPractice] = useAtom(practiceAtom);

    const loadPractice = async(practiceId: string) => {
        const loadedPractice = await getPractice(practiceId); 
        setPractice(loadedPractice);
    }

    const resetPractice = () => setPractice(null);

    const nextCard = async () => {
        if (!practice) {
            throw new Error('Practice expected, but not present!!!')
        };
        await advancePractice(practice.practiceId);
        await loadPractice(practice.practiceId);
    }

    const gradeCard = async (grade: Grade) => {
        if (!practice) {
            throw new Error('Practice expected, but not present!!!')
        };
        await postGrade(practice.practiceId, grade);
        await advancePractice(practice.practiceId);
        await loadPractice(practice.practiceId);
    }

    return {generatePractice, practice, loadPractice, resetPractice, nextCard, gradeCard};
}