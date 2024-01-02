import { useState, useEffect } from "react"
import { useCardRepository } from "./useCardRepository"
import { usePracticeRepository } from "../../usePracticeRepository"
import { Grade } from "@/lib/grade";

export const useCardPresenter = () => {
    const { practice, nextCard, gradeCard } = usePracticeRepository();
    const { card, loadCard } = useCardRepository();
    const [showSideB, setShowSideB] = useState<boolean>(false)
    useEffect( () => {
        setShowSideB(false);
        if (!practice) {
            return
        }
        loadCard(practice.currentCardId);
    }, [practice?.currentCardId])
    
    const reveal = () => {
        setShowSideB(true);  
    }

    const cardViewModel = card ? {
        task: card.task,
        sideA: card.sideA,
        sideB: card.sideB
    } : null

    const viewModel = {
        showSideB,
        card: cardViewModel
    }

    const next = () => {
        nextCard();
    }

    const miss = () => gradeCard(Grade.Miss);

    const doubt = () => gradeCard(Grade.Doubt);

    const hit = () => gradeCard(Grade.Hit);

    return {
        viewModel,
        reveal,
        miss,
        doubt,
        hit,
        next
    }
}