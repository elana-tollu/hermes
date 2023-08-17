'use client'

import { FormEvent, useState } from "react"

interface NewCard {
    foreign: string
    native: string
}

export default function Page() {
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
    }

    return (
        <div>
            <h1>Hello, Home Author!</h1>

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
        </div>
    )
}