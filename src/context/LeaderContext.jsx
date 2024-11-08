
import React, { createContext, useState } from "react";
import leaderdata from '../data/leadersdata'

export const LeaderContext = createContext()

export const LeaderContextProvider = ({children}) => {
    const [leader, setLeader] = useState(leaderdata)
    return(
        <LeaderContext.Provider value={{leader, setLeader}}>
            {children}
        </LeaderContext.Provider>
    )
}
