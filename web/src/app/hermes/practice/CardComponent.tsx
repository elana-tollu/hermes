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
    const { currentCardId } = usePracticeRepository();

    const [showSideB, setShowSideB] = useState<boolean>(false)

    useEffect( () => {
        if (!currentCardId) {
            return
        }
        loadCard(currentCardId);
    }, [currentCardId])
    
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
        <div className='flex flex-col w-80 rounded-3xl border-2 border-gray-300 p-5 gap-5 text-center'>
            <h2 className='text-xl text-gray-500'>{viewModel.card.task}</h2>

            <div className='text-lg text-gray-800'>{viewModel.card.sideAText}</div>

            {viewModel.showSideB && (
                <div>{viewModel.card.sideBText}</div>
            )}

            <div className='flex flex-row justify-between'>
                <button className='w-20 rounded-md border-2 border-gray-300 p-3 text-gray-500' onClick={reveal} disabled={viewModel.showSideB}>Reveal</button>

                <button className='w-20 rounded-md border-2 border-gray-300 p-3 text-gray-500' onClick={next}>Next</button>
            </div>
        </div>
    );
}
