import { useState, useEffect } from "react"
import { useCardRepository } from "./useCardRepository"
import { usePracticeRepository } from "../../usePracticeRepository"

export const useCardPresenter = () => {
    const { practice, nextCard } = usePracticeRepository();
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

    return {
        viewModel,
        reveal,
        next
    }
}