import { useContext } from "react"
import { HermesContext } from "./HermesContext"
import { atom, useAtom } from "jotai";
import { Practice } from "@/lib/practice/practise";

const practiceAtom = atom<Practice | null>(null);

export function usePracticeRepository() {
    const {generatePractice, getPractice} = useContext(HermesContext);
    const [practice, setPractice] = useAtom(practiceAtom);

    const loadPractice = async(practiceId: string) => {
        const loadedPractice = await getPractice(practiceId); 
        setPractice(loadedPractice);
    }

    const resetPractice = () => setPractice(null);

    return {generatePractice, practice, loadPractice, resetPractice};
}