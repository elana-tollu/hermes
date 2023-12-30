'use client'

import { CardComponent } from "./CardComponent";
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

        <CardComponent />
        
        <div>{viewModel.cardNumber} / {viewModel.totalCards}</div>

      </div>
    )
}