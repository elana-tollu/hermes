'use client'

import { useCardPresenter } from "./useCardPresenter"

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

            <div className='text-lg text-gray-800'>{viewModel.card.sideA.text}</div>

            {viewModel.showSideB && (
                <div>{viewModel.card.sideB.text}</div>
            )}

            <div className='flex flex-row justify-between'>
                <button className='w-20 rounded-md border-2 border-gray-300 p-3 text-gray-500' onClick={reveal} disabled={viewModel.showSideB}>Reveal</button>

                <button className='w-20 rounded-md border-2 border-gray-300 p-3 text-gray-500' onClick={next}>Next</button>
            </div>
        </div>
    );
}
