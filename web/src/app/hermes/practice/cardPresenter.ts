import { useState } from "react";

export const useCardPresenter = () => {
    const [viewModel, setViewModel] = useState({
        task: 'translate',
        showSideB: false,
        sideAText: 'eramaja',
        sideBText: 'дом'
    })
    
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
