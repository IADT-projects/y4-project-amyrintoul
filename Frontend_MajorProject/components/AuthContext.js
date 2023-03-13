import React, {createContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    <AuthContext.Provider value="test value" >{children}</AuthContext.Provider>
}