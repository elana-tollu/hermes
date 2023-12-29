'use client'

import { useHermesHomePresenter } from "./useHermesHomePresenter"

export default function HermesHomeComponent() {
   const presenter = useHermesHomePresenter();

    return (
      <div>
        <h1>Hello, Ilia!</h1>
        
        <button
          onClick={ () => presenter.generatePractice()}
        >
          Start
        </button>

      </div>
    )
}