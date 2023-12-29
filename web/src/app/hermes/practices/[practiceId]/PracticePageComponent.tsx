'use client'

import { usePracticePagePresenter } from "./usePracticePagePresenter";

export default function PracticePageComponent() {
   const {viewModel} = usePracticePagePresenter();

   if (!viewModel) {
    return (
        <div>Loading...</div>
    )
   }

    return (
      <div>
        <h1>Practice {viewModel.practiceId}</h1>
        
        <div>{viewModel.cardNumber} / {viewModel.totalCards}</div>

      </div>
    )
}