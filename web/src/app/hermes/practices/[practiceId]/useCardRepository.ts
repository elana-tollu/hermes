import { useContext, useState } from "react"
import { HermesContext } from "../../HermesContext"
import { CardResponse } from "../../apiGateway/cardResponse"

export const useCardRepository = () => {
    const {getCard} = useContext(HermesContext);
    const [card, setCard] = useState<CardResponse | null>(null);
    
    const loadCard = async (cardId: string) => {
        const loadedCard = await getCard(cardId);
        setCard(loadedCard);
    }

    return {
        card,
        loadCard
    }
}