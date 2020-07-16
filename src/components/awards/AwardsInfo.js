import React, {useContext, useState} from "react";
import {AwardContext} from "../../context/AwardsContextProvider";
import AwardInformation from "./AwardInformation";
import {Carousel} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";


const AwardsInfo = () => {
    const {awards} = useContext(AwardContext);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const renderIcon = (direction) => {
        return <FontAwesomeIcon className="bg-carousel-icon"
                                icon={direction === 'left' ? faChevronLeft : faChevronRight}/>
    }

    return awards && awards.length ? (
        <div className="container-fluid">
            <Carousel activeIndex={index}
                      prevIcon={renderIcon('left')}
                      nextIcon={renderIcon('right')}
                      onSelect={handleSelect} >

                {
                    awards.map(award => {
                        return (
                            <Carousel.Item key={award.id}>
                                <AwardInformation award={award}/>
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
