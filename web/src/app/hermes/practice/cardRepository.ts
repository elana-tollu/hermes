import { Card } from "@/lib/card";
import { Practice } from "@/lib/practice/practice";
import { useState } from "react";

interface ApplicationModel {
    practice: Practice
    currentCard: Card | null
}

export const useCardRepository = () => {
    const [applicationModel, setApplicationModel] = useState<ApplicationModel>()
    
    const reveal = () => {
      setViewModel({...viewModel, showSideB: true});  
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