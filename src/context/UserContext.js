import React, { createContext, useState, useEffect } from "react";
import {onAuthUIStateChange } from "@aws-amplify/ui-components";

export const UserContext = createContext([]);

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [authState, setAuthState] = useState(null);

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
        });
    }, []);
    return (
        <UserContext.Provider value={{ authState, user }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
