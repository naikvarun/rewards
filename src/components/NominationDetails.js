import React from 'react';
import {Col, Row, Card, Badge, Accordion} from "react-bootstrap";

import AwardIcon from "./AwardIcon";
import Vote from "./Voting";

const NominationDetails = ({nomination}) => {

    const renderVote = () => {
        return nomination.votes ? (
            <div className="mt-3">
                <Vote nomination={nomination}/>
            </div>
        ) : null;
    }
    return (
        <React.Fragment>
            <Row className="justify-content-md-center mt-4 mb-4">
                <Col>
                    <Accordion defaultActiveKey={0}>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={nomination.id}>
                                <div>
                                    <AwardIcon award={nomination.award.title}/>
                                    <h5 style={{display: 'inline'}}
                                        className="ml-2"> {nomination.nominee.join(', ')}</h5>
                                    <span className="ml-2">  {nomination.categories.map(category => {
                                        return (
                                            <Badge className="ml-1" key={`${nomination.id}-${category}`}
                                                   variant="bw">{category}</Badge>
                                        )
                                    })}</span>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={nomination.id}>
                                <Card.Body>
                                    <Card.Text as="div">
                                        <div className="">
                                            {nomination.nominationFor}
                                        </div>
                                        <div className="mt-3"><span
                                            className="text-muted"> By {nomination.nominationBy} at {new Date(nomination.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        {renderVote()}
                                    </Card.Text>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default NominationDetails;
