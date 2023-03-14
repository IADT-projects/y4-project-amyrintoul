import React, {createContext} from 'react'
import axios from '../config/index'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    <AuthContext.Provider value="test value" >{children}</AuthContext.Provider>
}