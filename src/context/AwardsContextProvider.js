import React, {useEffect, useState, createContext} from 'react';
import {getAwards} from "../services/awards.service";

export const AwardContext = createContext([]);

const AwardContextProvider = (props) => {
    const [awards, setAwards] = useState([]);

    useEffect(() => {

        getAwards()
            .then(
                ({data: {listAwards}}) => {
                    setAwards(listAwards.items);
                })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <AwardContext.Provider value={{awards}}>
            {props.children}
        </AwardContext.Provider>
    )
}
export default AwardContextProvider;
