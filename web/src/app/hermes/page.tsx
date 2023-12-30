'use client'

import { useMemo } from "react";
import { HermesContext } from "./HermesContext"
import HermesHomeComponent from "./HermesHomeComponent"
import { HttpApiGateway } from "./apiGateway/apiGateway"

export default function Page() {
  
  
  return ( 
    <HermesHomeComponent />
  )
}