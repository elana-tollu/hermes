'use client'

import { apiGateway } from "@/lib/apiClient"
import { CardOld } from "./CardOld"
import { useState } from "react"
import { Practice } from "@/lib/practice/practice"

export default function Page() {
  const [practice, setPractice] = useState<Practice>();

  const generatePractice = async () => {
    const practice = await apiGateway.generatePractice();
    setPractice(practice);
  }

    return (
      <div>
        <h1>Hello, Home page!</h1>

        
        <button
          onClick={generatePractice}
        >
          Start
        </button>

        
      </div>
    )
  }