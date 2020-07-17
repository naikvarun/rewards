import React, {useState, createContext, useEffect} from 'react';
import {getNominations, nominate} from '../services/nomination.service';

export const NominationContext = createContext([]);

const NominationContextProvider = (props) => {
    const [nominations, setNominations] = useState([]);


    const fetchNomination = async () => {
        getNominations().then((
            {data: {listNominations}}
        ) => {
            console.log(listNominations.items);
            setNominations(listNominations.items);
        }).catch(err => console.log(err));

    }

    const createNomination = async (newNomination) => {
         await nominate(newNomination);
        await fetchNomination();
    }


    useEffect(() => {
       fetchNomination();
    }, []);

    return (
        <NominationContext.Provider value={{nominations, createNomination}}>
            {props.children}
        </NominationContext.Provider>
    );
}

export default NominationContextProvider;
