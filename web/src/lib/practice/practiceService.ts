import { Block, Card } from "../card";
import { NewPractice } from "./newPractice";
import { Practice } from "./practice";

export async function generatePractice(newPractice: NewPractice): Promise<Practice> {
    const cardIds = cards.map(card => card.id)

    return {cardIds}
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

const bl1: Block = {
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
}

const bl2: Block = {
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
}

const bl3: Block = {
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
}

const bl4: Block = {
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
}

const bl5: Block = {
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