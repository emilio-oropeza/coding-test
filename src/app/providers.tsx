'use client'
import { Dispatch, createContext, useReducer } from "react";
import { reducer } from "@/app/reducer/reducerUser";
import type { stateUser, actionUser } from "@/app/types/userType";
import usersData from "@/app/data/users.json";

export const contexto = createContext<{ state: stateUser; dispatch: Dispatch<actionUser>; } | null>(null);
const initialState = {
  users: usersData,
};

export function Providers({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <contexto.Provider value={{ state, dispatch }}>
            {children}
        </contexto.Provider>
    );
}