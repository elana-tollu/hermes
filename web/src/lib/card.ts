export interface Card {
    cardId: string
    task: string
    sideA: Sample
    sideB: Sample
}

export interface Sample {
    text?: string
    audioUrl?: string
    imageUrl?: string
}
