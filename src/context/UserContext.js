import React, { createContext, useState, useEffect } from "react";
import {onAuthUIStateChange } from "@aws-amplify/ui-components";
import {Auth} from 'aws-amplify'
export const UserContext = createContext([]);

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [authState, setAuthState] = useState(null);

    const handleSignOut = async () => {
        console.log('user Signed out');
        await Auth.signOut();
    }

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
        });
    }, []);
    return (
        <UserContext.Provider value={{ authState, user,  handleSignOut }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
