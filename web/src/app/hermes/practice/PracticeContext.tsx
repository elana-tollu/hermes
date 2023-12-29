'use client'

import { PracticeOld } from "@/lib/practice/practiceOld";
import { PropsWithChildren, createContext, useState } from "react";

interface State {
    currentCardId?: string
    setCurrentCardId: ( currentCardId?: string ) => void
    practice?: PracticeOld
    setPractice: (practice?: PracticeOld) => void
}

export const PracticeContext = createContext<State>({
    setCurrentCardId: ( currentCardId?: string ) => { throw new Error('Not implemented') },
    setPractice: (practice?: PracticeOld) => { throw new Error('Not implemented') }
});

export const PracticeProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [currentCardId, setCurrentCardId] = useState<string>();
    const [practice, setPractice] = useState<PracticeOld>();
    const state = {currentCardId, setCurrentCardId, practice, setPractice};

    return (
        <PracticeContext.Provider value={state}>
            {children}
        </PracticeContext.Provider>
    )
}