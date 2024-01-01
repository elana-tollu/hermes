import { Card } from "../card";
import { NewPractice } from "./newPractice";
import { PracticeOld } from "./practiceOld";
import { Practice } from "./practice";
import { createPractice, getPracticeById, updateCurrentCardId } from "@/db/practicesRepository";

export async function generatePracticeOld(newPractice: NewPractice): Promise<PracticeOld> {
    const cardIds = cards.map(card => card.cardId);
    const practiceId = '123ABC';

    return { practiceId, cardIds };
}

export async function generatePractice(newPractice: NewPractice): Promise<Practice> {
    const practiceId = crypto.randomUUID();
    const practice = {
        practiceId,
        currentCardId: cards[0].cardId,
        cardIds: cards.map(card => card.cardId)
    };
    const createdPractice = await createPractice(practice);

    return createdPractice;
}

export async function practiceById(practiceId: string): Promise<Practice> {
    const practice = await getPracticeById(practiceId);

    return practice
}

export async function advancePractice(practiceId: string): Promise<void> {
    const practice = await getPracticeById(practiceId);
    const currentCardIndex = practice.cardIds.indexOf(practice.currentCardId);
    const nextCardId = practice.cardIds[currentCardIndex + 1];
    if(!nextCardId) {
        return
    };
    await updateCurrentCardId(practiceId, nextCardId);
}

export async function getCard(cardId: string): Promise<Card> {
    const card = cards.find(card => card.cardId === cardId)!;

    return card
}

const cards: Card[] = [
    {
        cardId: '64ad9c0f-254d-4240-8f28-e49aa2c09758',
        task: 'Translate',
        sideA: {
            text: 'suvila, suvila, suvilat'
        },
        sideB: {
            text: 'дача'
        }
    },
    {
        cardId: '0c6883ca-4928-4b6b-975b-781f4adaad79',
        task: 'Translate',
        sideA: {
            text: 'paarismaja, paarismaja, paarismaja'
        },
        sideB: {
            text: 'таунхаус'
        }
    },
    {
        cardId: '6a6e794c-a5ee-47ea-9d0e-4bbd1b747b51',
        task: 'Translate',
        sideA: {
            text: 'eramaja, eramaja, eramaja'
        },
        sideB: {
            text: 'частный дом'
        }
    },
    {
        cardId: '9807b33a-b495-4393-8030-4f5f8b49510c',
        task: 'Translate',
        sideA: {
            text: 'puumaja, puumaja, puumaja'
        },
        sideB: {
            text: 'деревянный дом'
        }
    },
    {
        cardId: '3d1622f0-5cb6-4943-ab25-8294fe58e611',
        task: 'Translate',
        sideA: {
            text: 'kivimaja, kivimaja, kivimaja'
        },
        sideB: {
            text: 'каменный дом'
        }
    }
]
