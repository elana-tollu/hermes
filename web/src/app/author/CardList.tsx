'use client'

import { CardOld } from "@/lib/cardOld"

interface Props {
    cards: CardOld[]
}

export function CardList({cards}: Props) {
    return (
        <ul>
            {cards.map(card => (
                <li key={card.id}>{card.foreign} - {card.native}</li>
            ))}
        </ul>
    );
}
