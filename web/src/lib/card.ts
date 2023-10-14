export interface Card {
    id: string
    blockId: string
    task: string
    sideA: string[]
    sideB: string[]
}

export interface Block {
    id: string
    samples: Sample[]
}

export interface Sample {
    index: string
    type: 'text'
    text: string
}
