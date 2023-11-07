'use client'

import { PracticeComponent } from "./PracticeComponent";
import { PracticeProvider } from "./practiceContext";

export default function Page() {
    return (
        <div>
            <PracticeProvider>
                <PracticeComponent/>
            </PracticeProvider>
        </div>
    )
  }