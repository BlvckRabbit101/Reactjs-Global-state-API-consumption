import React from 'react'
import { createContext, useState } from 'react';

export const AppState = createContext(null)
export const Globalstate = ({children}) => {
    const [count, setCount ] = useState(0)

  return (
    <AppState.Provider value={{count, setCount}}>
      {children}
    </AppState.Provider>
  )
};