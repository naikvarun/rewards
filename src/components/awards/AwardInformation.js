import React from "react";
import {Col, Row} from 'react-bootstrap'
import './AwardsInformation.css'

const AwardInformation = ({award}) => {

    return (

        <Row className="justify-content-md-center">
            <Col md="auto">
              <div className="bg-award">
                  <Row className="mt-4">
                      <Col >
                          <span className="award-title"> <h3>{award.title}</h3> </span>
                      </Col>
                  </Row>
                  <Row className="mt-5">
                      <Col >
                          <div className="award-description">
                            <span > {award.description} </span>
                          </div>
                      </Col>
                  </Row>
                  <Row className="mt-5">
                      <Col >
                          <span className="award-detail">Nominated for  {award.categories.join(', ')} </span>
                      </Col>
                  </Row>
                  <Row className="mt-3">
                      <Col >
                          <span className="award-detail">Nomination By {award.nominatedBy.join(', ')} </span>
                      </Col>
                  </Row>
              </div>
            </Col>
        </Row>

    )
};

export default AwardInformation;
