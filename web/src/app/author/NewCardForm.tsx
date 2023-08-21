'use client'

import { NewCard } from "@/lib/newCard";
import { FormEvent, useState } from "react"

interface Props {
    onNewCard: () => void
}

export function NewCardForm({onNewCard}: Props) {
    const [newCard, setNewCard] = useState<NewCard>({ foreign: '', native: '' })

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await fetch('/api/author/cards', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCard),
        });
        onNewCard();
    }

    return (
            <form className="flex flex-col"
                onSubmit={onSubmit}>
                <label>
                    <input value={newCard.foreign} onChange={event => setNewCard(current => ({ ...current, foreign: event.target.value }))}></input>
                </label>

                <label>
                    <input value={newCard.native} onChange={event => setNewCard(current => ({ ...current, native: event.target.value }))}></input>
                </label>

                <button>Add</button>
            </form>
    )
}