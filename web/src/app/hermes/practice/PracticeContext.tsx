'use client'

import { Practice } from "@/lib/practice/practice";
import { PropsWithChildren, createContext, useState } from "react";

interface State {
    currentCardId?: string
    setCurrentCardId: ( currentCardId?: string ) => void
    practice?: Practice
    setPractice: (practice?: Practice) => void
}

export const PracticeContext = createContext<State>({
    setCurrentCardId: ( currentCardId?: string ) => { throw new Error('Not implemented') },
    setPractice: (practice?: Practice) => { throw new Error('Not implemented') }
});

export const PracticeProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [currentCardId, setCurrentCardId] = useState<string>();
    const [practice, setPractice] = useState<Practice>();
    const state = {currentCardId, setCurrentCardId, practice, setPractice};

    return (
        <PracticeContext.Provider value={state}>
            {children}
        </PracticeContext.Provider>
    )
}