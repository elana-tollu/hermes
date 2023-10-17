'use client'

import { apiGateway } from "@/lib/apiClient"
import { Card } from "@/lib/card"
import { Practice } from "@/lib/practice/practice"
import { useEffect, useState } from "react"
import { usePracticeRepository } from "./PracticeComponent"

interface ApplicationModel {
    practice: Practice
    currentCard: Card | null
}

export const useCardRepository = () => {
    const [card, setCard] = useState<Card>()
    
    const loadCard = async (cardId: string) => {
        const card = await apiGateway.getCardById(cardId);
        setCard(card);
    }

    return {
        card,
        loadCard
    }
}

interface ViewModel {
    isLoading: boolean
    showSideB: boolean
    card?: {
        task: string
        sideAText: string
        sideBText: string
    }
}

export const useCardPresenter = () => {
    const { card, loadCard } = useCardRepository();
    const { applicationModel } = usePracticeRepository();

    const cardId = applicationModel.currentCardId;

    const [showSideB, setShowSideB] = useState<boolean>(false)

    useEffect( () => {
        if (!cardId) {
            return
        }
        loadCard(cardId);
    }, [cardId])
    
    const reveal = () => {
        setShowSideB(true);  
    }

    const cardViewModel = !card ? undefined : {
        task: card.task,
        sideAText: card.sideA.join(' '),
        sideBText: card.sideB.join(' ')
    }

    const viewModel = {
        isLoading: !card,
        showSideB,
        card: cardViewModel
    }

    const next = () => {
        console.log('next');
    }

    return {
        viewModel,
        reveal,
        next
    }
}


export const CardComponent: React.FC = () => {
    const { viewModel, reveal, next } = useCardPresenter();

    if (!viewModel.card) {
            return (
                <div>Card is loading</div>
            )
        }

    return (
        <div className='w-64'>
            <h2>{viewModel.card.task}</h2>

            <div>{viewModel.card.sideAText}</div>

            {viewModel.showSideB && (
                <div>{viewModel.card.sideBText}</div>
            )}

            <button onClick={reveal} disabled={viewModel.showSideB}>Reveal</button>

            <button onClick={next}>Next</button>
        </div>
    );
}
