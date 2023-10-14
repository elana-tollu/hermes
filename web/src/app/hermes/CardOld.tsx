'use client'

import { apiGateway } from "@/lib/apiClient";
import { CardOld } from "@/lib/cardOld"
import { useState, useEffect } from "react";

interface Props {
    cardId: string
}

export function CardOld({cardId}: Props) {
    const [card, setCard] = useState<CardOld>();
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
