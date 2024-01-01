import { Card } from "../card";
import { NewPractice } from "./newPractice";
import { PracticeOld } from "./practiceOld";
import { Practice } from "./practice";

export async function generatePracticeOld(newPractice: NewPractice): Promise<PracticeOld> {
    const cardIds = cards.map(card => card.cardId)
    const practiceId = '123ABC';

    return { practiceId, cardIds }
}

export async function generatePractice(newPractice: NewPractice): Promise<Practice> {
    return practice
}

export async function practiceById(practiceId: string): Promise<Practice> {
    return practice
}

export async function advancePractice(practiceId: string): Promise<void> {
    const currentCardIndex = practice.cardIds.indexOf(practice.currentCardId);
    const nextCardId = practice.cardIds[currentCardIndex + 1];
    if(!nextCardId) {
        return
    };
    practice.currentCardId = nextCardId;
}

export async function getCard(cardId: string): Promise<Card> {
    const card = cards.find(card => card.cardId === cardId)!;

    return card
}

const practice: Practice = {
    practiceId: '123ABC',
    currentCardId: 'CA1',
    cardIds: ['CA1', 'CA2', 'CA3', 'CA4',' CA5']
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
