import { useParams } from 'next/navigation'
import { usePracticeRepository } from "../../usePracticeRepository";
import { useEffect } from 'react';

export function usePracticePagePresenter() {
    const {practiceId} = useParams<{ practiceId: string }>()
    const {practice, loadPractice, resetPractice} = usePracticeRepository();

    useEffect( () => {
        loadPractice(practiceId);
        return () => resetPractice();
    }, [practiceId]);
    
    const viewModel = practice ? {
        practiceId: practice.practiceId,
        cardNumber: practice.currentCardNumber,
        totalCards: practice.totalCards
    } : null;

    return {viewModel}
}