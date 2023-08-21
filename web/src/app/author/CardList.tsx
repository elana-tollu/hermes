'use client'

import { Card } from "@/lib/card"

interface Props {
    cards: Card[]
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
