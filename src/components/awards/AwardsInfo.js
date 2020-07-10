import React, {useContext} from "react";
import {AwardContext} from "../../context/AwardsContextProvider";

const AwardsInfo = () => {
    const {awards} = useContext(AwardContext);
    console.log(awards);
    return awards && awards.length ? (
        <div className="container">
            <ul>
                {awards.map(award => {

                    return (
                        <li key={award.id}>{award.title}</li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <h1>No Awards Found</h1>
    );
};

export default AwardsInfo;
