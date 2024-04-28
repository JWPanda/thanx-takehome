import * as React from 'react'

import { createContext, useState } from "react";

import { iUser, iUserContext } from "../types";

export const UserContext = createContext<iUserContext | null>(null)

export const UserProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [user, setUser] = useState<iUser|null>(null)

  const addUser = (user: iUser): void => {
    setUser(user)
  }

  return(
    <UserContext.Provider value={{ user, addUser }}>
      {children}
    </UserContext.Provider>
  )
}
