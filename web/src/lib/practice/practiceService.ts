import { Card } from "../card";
import { NewPractice } from "./newPractice";
import { PracticeOld } from "./practiceOld";

export async function generatePractice(newPractice: NewPractice): Promise<PracticeOld> {
    const cardIds = cards.map(card => card.cardId)
    const practiceId = '123ABC';

    return { practiceId, cardIds }
}

export async function getCard(cardId: string): Promise<Card> {
    const card = cards.find(card => card.cardId === cardId)!;

    return card
}


const cards: Card[] = [
    {
        cardId: 'CA1',
        task: 'Translate',
        sideA: {
            text: 'suvila, suvila, suvilat'
        },
        sideB: {
            text: 'дача'
        }
    },
    {
        cardId: 'CA2',
        task: 'Translate',
        sideA: {
            text: 'paarismaja, paarismaja, paarismaja'
        },
        sideB: {
            text: 'таунхаус'
        }
    },
    {
        cardId: 'CA3',
        task: 'Translate',
        sideA: {
            text: 'eramaja, eramaja, eramaja'
        },
        sideB: {
            text: 'частный дом'
        }
    },
    {
        cardId: 'CA4',
        task: 'Translate',
        sideA: {
            text: 'puumaja, puumaja, puumaja'
        },
        sideB: {
            text: 'деревянный дом'
        }
    },
    {
        cardId: 'CA5',
        task: 'Translate',
        sideA: {
            text: 'kivimaja, kivimaja, kivimaja'
        },
        sideB: {
            text: 'каменный дом'
        }
    }
]
