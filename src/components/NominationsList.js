import React, {useContext} from 'react';
import {Col, Row, ListGroup} from "react-bootstrap";
import {NominationContext} from "../context/NominationContextProvider";
import NominationDetails from "./NominationDetails";
import {AwardContext} from "../context/AwardsContextProvider";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAwardIcon } from '../services/awards.service';

const NominationList = () => {

    const {nominations} = useContext(NominationContext);
    const {awards} = useContext(AwardContext);

    const renderNominations = () => {
        return (
            nominations && nominations.length ? (
                (
                    nominations.map(nomination => {
                        return (
                            <NominationDetails nomination={nomination} key={nomination.id} />
                        )
                    })
                )
                ) :
                (
                    <div className="text-center">
                    <h3>You have no nominations, recognize someone today!!!</h3>
                    </div>
                )
        )
    }

    return (
        <React.Fragment>
        <div className="mt-5 mb-4 container-fluid">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <ListGroup horizontal>
                        {awards.map(award => {
                            return (
                                <ListGroup.Item key={award.id}><FontAwesomeIcon icon={getAwardIcon(award.title)} /> {award.title}</ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={{ span: 8, offset: 2 }}>
                    { renderNominations()}
                </Col>
            </Row>

        </div>
        </React.Fragment>
    )
}

export default NominationList;
