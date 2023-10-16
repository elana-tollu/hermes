'use client'

export const usePracticePresenter = () => {
    const viewModel = {
        practice: undefined,
        currentCard: undefined
    }

    return {
        viewModel
    }
}

export const Practice: React.FC = () => {
    const { viewModel } = usePracticePresenter()

    if (!viewModel.practice) {
        return (
            <div>Practice is loading</div>
        )
    }

    return (
        <div className='w-64'>
            
        </div>
    );
}