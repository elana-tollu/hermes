'use client'

import { Practice } from "@/lib/practice/practice";
import { generatePractice } from "@/lib/practice/practiceService";
import { useEffect, useState } from "react";
import { CardComponent } from "./CardComponent";

interface ApplicationModel {
    practice?: Practice
    currentCardId?:  string
}

export const usePracticeRepository = () => {
    const [applicationModel, setApplicationModel] = useState<ApplicationModel>({});
    
    const generate =async () => {
        const practice = await generatePractice({});
        console.log('practice', practice)
        const currentCardId = practice.cardIds[0];
        setApplicationModel({ currentCardId, practice });
    }

    const nextCard = () => {
        console.log('next');
    }

    return {
        applicationModel,
        generate,
        nextCard
    }
}

export const usePracticePresenter = () => {
    const { applicationModel, generate } = usePracticeRepository();

    useEffect( () => {
        generate();
    }, [])

    const viewModel = {
        isLoading: !applicationModel.practice
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
        <div className='w-64'>
            <CardComponent />
        </div>
    );
}