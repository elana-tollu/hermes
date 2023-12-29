'use client'

import { PracticeOld } from "@/lib/practice/practiceOld";
import { generatePractice } from "@/lib/practice/practiceService";
import { useContext, useEffect } from "react";
import { CardComponent } from "./CardComponent";
import { PracticeContext } from "./PracticeContext";

interface ApplicationModel {
    practice?: PracticeOld
    currentCardId?:  string
}

export const usePracticeRepository = () => {
    const {
        currentCardId, 
        setCurrentCardId, 
        practice, 
        setPractice
    } = useContext(PracticeContext);
    
    const generate = async () => {
        const practice = await generatePractice({});
        console.log('practice', practice)
        const currentCardId = practice.cardIds[0];
        setCurrentCardId(currentCardId);
        setPractice(practice);
    }

    const nextCard = () => {
        console.log('next');
    }

    return {
        currentCardId,
        practice,
        generate,
        nextCard
    }
}

export const usePracticePresenter = () => {
    const { practice, generate } = usePracticeRepository();

    useEffect( () => {
        generate();
    }, [])

    const viewModel = {
        isLoading: !practice
    }

    return {
        viewModel
    }
}

export const PracticeComponent: React.FC = () => {
    const { viewModel } = usePracticePresenter();

    if (viewModel.isLoading) {
        return (
            <div>Practice is loading</div>
        )
    }

    return (
        <div className='w-80'>
            <CardComponent />
        </div>
    );
}