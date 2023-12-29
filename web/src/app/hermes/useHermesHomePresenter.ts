import { useRouter } from "next/navigation";
import { usePracticeRepository } from "./usePracticeRepository"

export function useHermesHomePresenter() {
    const router = useRouter()

    const practiceRepository = usePracticeRepository();
    const generatePractice = async () => {
        const practiceId = await practiceRepository.generatePractice();
        router.push(`/hermes/practices/${practiceId}`)
    }

    return {generatePractice}
}