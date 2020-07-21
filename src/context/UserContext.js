import React, { createContext, useState, useEffect } from "react";
import {onAuthUIStateChange } from "@aws-amplify/ui-components";
import {Auth} from 'aws-amplify'
export const UserContext = createContext([]);

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [authState, setAuthState] = useState(null);
    const [username, setUsername] =  useState(null);
    const handleSignOut = async () => {
        console.log('user Signed out');
        await Auth.signOut();
    }

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData);
            let userName = null;
            if(authData) {
                userName = authData.username;
            }
            setUsername(userName);
        });
    }, []);
    return (
        <UserContext.Provider value={{ authState, user, username,  handleSignOut }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
