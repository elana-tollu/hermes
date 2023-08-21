'use client'

import { Card } from "@/lib/card";
import { useState, useEffect } from "react";
import { CardList } from "./CardList";
import { NewCardForm } from "./NewCardForm";

export default function Page() {
    const [cards, setCards] = useState<Card[]>([]);
    useEffect ( () => {
        loadCards();
    }, []);

    const loadCards = async () => {
        const response = await fetch('/api/author/cards');
        const json = await response.json();
        setCards(json);
    }

    return (
        <div>
            <h1>Hello, Home Author!</h1>

            <NewCardForm onNewCard={loadCards}/>

            <CardList cards={cards} />
        </div>
    )
}