import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
const NominationForm = () => {
    return (
        <div className="mt-4 mb-4">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Button variant="bw" size="lg">Nominate Someone Today</Button>
                </Col>
            </Row>
        </div>
    )
}
export default NominationForm;
