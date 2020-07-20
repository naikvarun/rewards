import React, {createContext, useEffect, useState} from 'react';
import {getNominations, nominate, voteNomination} from '../services/nomination.service';
import {Auth} from "aws-amplify";

export const NominationContext = createContext([]);

const NominationContextProvider = (props) => {
    const [nominations, setNominations] = useState([]);

    const refreshNominations = (items) => {
        Auth.currentSession()
            .then(value => {
                const isVoter = !!value.getIdToken().payload['cognito:groups'];
                setNominations(items.map(item => {
                    return {
                        ...item,
                        votes: item.votes ? item.votes : (isVoter ? [] : null)
                    }
                }));
            } );

    }

    const fetchNomination = async () => {
        getNominations().then((
            {data: {listNominations}}
        ) => {
            refreshNominations(listNominations.items);
        }).catch(err => {

            if (err.data) {
                const listNominations = err.data.listNominations;
                refreshNominations(listNominations.items);
            }
            console.log(err);
        });
    }

    const createNomination = async (newNomination) => {
        await nominate(newNomination);
        await fetchNomination();
    }

    const OnVoteNomination = async (nominationId, voter) => {
        const index = nominations.findIndex(n => n.id === nominationId);
        if (index !== -1) {
            const allVotes = [...nominations[index].votes, voter];
            voteNomination(nominationId, allVotes)
                .then((data) => {
                    const updatedNominations = nominations.map(n => {
                        if (n.id === nominationId) {
                            return {
                                ...n,
                                votes: allVotes
                            }
                        } else {
                            return n;
                        }
                    });
                    setNominations(updatedNominations);
                }).catch(reason => console.log(reason));
        }

    }

    useEffect(() => {
        fetchNomination();
    }, []);

    return (
        <NominationContext.Provider value={{nominations, createNomination, OnVoteNomination}}>
            {props.children}
        </NominationContext.Provider>
    );
}

export default NominationContextProvider;
