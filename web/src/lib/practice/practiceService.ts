import { Block, Card } from "../card";
import { NewPractice } from "./newPractice";
import { PracticeOld } from "./practiceOld";

export async function generatePractice(newPractice: NewPractice): Promise<PracticeOld> {
    const cardIds = cards.map(card => card.id)
    const practiceId = '123ABC';

    return {practiceId, cardIds}
}

export async function getCard(cardId: string): Promise<Card> {
    const card = cards.find(card => card.id === cardId)!;
    const block = blocks.find(block => block.id === card.blockId)!;

    return {
        id: card.id,
        blockId: card.blockId,
        task: card.task,
        sideA: card.sideA.map( sampleIndex => block.samples.find(sample => sample.index === sampleIndex)!.text),
        sideB: card.sideB.map( sampleIndex => block.samples.find(sample => sample.index === sampleIndex)!.text),
    }
}


const cards: Card[] = [
    {
        id: 'CA1',
        blockId: 'BL1',
        task: 'Translate',
        sideA: ['A'],
        sideB: ['B']
    },
    {
        id: 'CA2',
        blockId: 'BL2',
        task: 'Translate',
        sideA: ['A'],
        sideB: ['B']
    },
    {
        id: 'CA3',
        blockId: 'BL3',
        task: 'Translate',
        sideA: ['A'],
        sideB: ['B']
    },
    {
        id: 'CA4',
        blockId: 'BL4',
        task: 'Translate',
        sideA: ['A'],
        sideB: ['B']
    },
    {
        id: 'CA5',
        blockId: 'BL5',
        task: 'Translate',
        sideA: ['A'],
        sideB: ['B']
    }
]

const blocks: Block[] = [
    {
        id: 'BL1',
        samples: [
            {
                index: 'A',
                type: 'text',
                text: 'suvila, suvila, suvilat'
            },
            {
                index: 'B',
                type: 'text',
                text: 'дача'
            }
        ]
    },

    {
        id: 'BL2',
        samples: [
            {
                index: 'A',
                type: 'text',
                text: 'paarismaja, paarismaja, paarismaja'
            },
            {
                index: 'B',
                type: 'text',
                text: 'таунхаус'
            }
        ]
    },

    {
        id: 'BL3',
        samples: [
            {
                index: 'A',
                type: 'text',
                text: 'eramaja, eramaja, eramaja'
            },
            {
                index: 'B',
                type: 'text',
                text: 'частный дом'
            }
        ]
    },

    {
        id: 'BL4',
        samples: [
            {
                index: 'A',
                type: 'text',
                text: 'puumaja, puumaja, puumaja'
            },
            {
                index: 'B',
                type: 'text',
                text: 'деревянный дом'
            }
        ]
    },

    {
        id: 'BL5',
        samples: [
            {
                index: 'A',
                type: 'text',
                text: 'kivimaja, kivimaja, kivimaja'
            },
            {
                index: 'B',
                type: 'text',
                text: 'каменный дом'
            }
        ]
    }
]