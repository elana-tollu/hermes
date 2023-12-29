'use client'

import { PracticeComponent } from "./PracticeComponent";
import { PracticeProvider } from "./PracticeContext";

export default function Page() {
    return (
        <div>
            <PracticeProvider>
                <PracticeComponent/>
            </PracticeProvider>
        </div>
    )
  }