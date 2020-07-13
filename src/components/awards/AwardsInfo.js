import React, {useContext, useState} from "react";
import {AwardContext} from "../../context/AwardsContextProvider";
import AwardInformation from "./AwardInformation";
import {Carousel } from 'react-bootstrap'
const AwardsInfo = () => {
    const {awards} = useContext(AwardContext);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return awards && awards.length ? (
        <div className="container-fluid">
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                awards.map(award => {
                   return (
                       <Carousel.Item key={award.id}>
                           <AwardInformation award={award} />
                       </Carousel.Item>
                   )
                })
            }
        </Carousel>
        </div>
    ) : (
        <h1>No Awards Found</h1>
    );
};

export default AwardsInfo;
