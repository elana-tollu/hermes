'use client'

import { useCardPresenter } from "./cardPresenter";

interface Props {
    cardId: string
}

export const Card: React.FC<Props> = ({ cardId }: Props) => {
    const { viewModel, reveal, next } = useCardPresenter()

    return (
        <div className='w-64'>
            <h2>{viewModel.task}</h2>

            <div>{viewModel.sideAText}</div>

            {viewModel.showSideB && (
                <div>{viewModel.sideBText}</div>
            )}

            <button onClick={reveal} disabled={viewModel.showSideB}>Reveal</button>

            <button onClick={next}>Next</button>
        </div>
    );
}
