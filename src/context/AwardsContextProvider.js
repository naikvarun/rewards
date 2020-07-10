import React, {useEffect, useState, createContext} from 'react';
import {API, graphqlOperation} from "aws-amplify";
import * as queries from '../graphql/queries';

export const AwardContext = createContext([
    {
        "id": "77e76535-9fb9-4cb8-8aa0-7cb9ce965a78",
        "title": "v-Award",
        "categories": [
            "Technical",
            "Customer"
        ],
        "description": "VAward for the team",
        "nominatedBy": [
            "Customer",
            "Colleague"
        ]
    }
]);

const AwardContextProvider = (props) => {
    const [awards, setAwards] = useState([ ]);

    useEffect(() => {
        console.log("Fetching Awards");
        async function getAwards() {
            API.graphql(graphqlOperation(queries.listAwards))
                .then(
                    ({data: {listAwards}}) => {
                        console.log(listAwards);
 setAwards(listAwards.items );
                    })
                .catch(err => {console.log(err)});
        }
        getAwards();


    }, []);

    return (
        <AwardContext.Provider value={{awards}}>
            {props.children}
        </AwardContext.Provider>
    )
}
export default AwardContextProvider;
