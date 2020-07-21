import React, {useContext} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {UserContext} from "../context/UserContext";
import {NominationContext} from "../context/NominationContextProvider";


const Vote = ({nomination}) => {
    const {username} = useContext(UserContext);
    const {OnVoteNomination} = useContext(NominationContext);

    const renderButton = () => {
        const userHasVoted = (nomination.votes.findIndex(v => v === username)) !== -1 ;
        return (<Button variant="secondary" size="sm" onClick={() =>   OnVoteNomination(nomination.id, username)} disabled={userHasVoted}> <FontAwesomeIcon
            icon={faThumbsUp}/> <span>{nomination.votes.length}</span> </Button>)
    }

    return (
        <div className="d-inline">
            {renderButton()}
        </div>
    )
}

export default Vote;
