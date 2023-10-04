'use client'

import { apiGateway } from "@/lib/apiClient";
import { Card } from "@/lib/card"
import { useState, useEffect } from "react";

interface Props {
    cardId: string
}

export function Card({cardId}: Props) {
    const [card, setCard] = useState<Card>();
    useEffect (() => {
        loadCard();
    }, []);

    const loadCard = async () => {
        const card = await apiGateway.getCardById(cardId);
        setCard(card);
    }

    if (!card) {
        return null;
    }
    
    return (
        <div className = 'w-64'>
            {card.foreign}
        </div>
    );
}
