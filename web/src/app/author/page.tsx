'use client'

import { CardOld } from "@/lib/cardOld";
import { useState, useEffect } from "react";
import { CardList } from "./CardList";
import { NewCardForm } from "./NewCardForm";
import { apiGateway } from "@/lib/apiClient";

export default function Page() {
    const [cards, setCards] = useState<CardOld[]>([]);
    useEffect (() => {
        loadCards();
    }, []);

    const loadCards = async () => {
        const allCards = await apiGateway.listAllCards();
        setCards(allCards);
    }

    return (
        <div className = "bg-amberl">
            <h1 className = 'text-orangemd m-10'>Hello, Author!</h1>

            <NewCardForm onNewCard={loadCards}/>

            <CardList cards={cards} />
        </div>
    )
}