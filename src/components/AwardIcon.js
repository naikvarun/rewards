import React from 'react';
import {faCrown, faMedal, faTrophy} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip, OverlayTrigger} from "react-bootstrap";


const iconMap = {'v-award': faTrophy, 'differentiater': faCrown, 'exellence': faMedal}



export const getAwardIcon = (title) => {
    return iconMap[title.toLowerCase()];
}


const AwardIcon = ({award}) => {


    const renderTooltip = (props) => {
        return (
            <Tooltip id="button-tooltip" {...props}>
                {award}
            </Tooltip>
        );
    }

    return (
        <OverlayTrigger
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <FontAwesomeIcon className="text-bw" icon={getAwardIcon(award)}/>
        </OverlayTrigger>

    )
}

export default AwardIcon;
