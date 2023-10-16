import { Card } from "./Card";
import { Practice } from "./Practice";

export default function Page({ params }: { params: { cardId: string } }) {
    return (
        <div>
            <Practice/>
        </div>
    )
  }