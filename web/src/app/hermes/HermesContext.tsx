'use client'

import { PropsWithChildren, createContext, useMemo } from "react";
import { ApiGateway, HttpApiGateway } from "./apiGateway";

export const HermesContext = createContext<ApiGateway>({} as ApiGateway);

export const HermesContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const apiGateway = useMemo(() => new HttpApiGateway(), []);

  return (
    <HermesContext.Provider value={apiGateway}>
      {children}
    </HermesContext.Provider>
  )
}