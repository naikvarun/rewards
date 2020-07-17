import React, {useContext, useState} from 'react'
import {Button, Col, Form, Modal, Row} from 'react-bootstrap'
import {AwardContext} from "../context/AwardsContextProvider";
import TagsInput from "react-tagsinput";
import './NominationForm.css'
import {NominationContext} from "../context/NominationContextProvider";
import {UserContext} from "../context/UserContext";

const NominationForm = () => {
    const [show, setShow] = useState(false);
    const {awards} = useContext(AwardContext);
    const {user} = useContext(UserContext);
    const {createNomination} = useContext(NominationContext)
    const [nomination, setNomination] = useState({
        nominationAwardId: '',
        nominee: ['Varun Naik'],
        nominationFor: '',
        categories: ['Innovation']
    })


    const nominationDescriptionPlaceHolder = '[Employee Name] working at [client name] in [project] is nominated for an excellence award in collaboration. While working on [one or two lines about project] they supported/helped other team members by [what they did in a couple of lines] and their efforts were appreciated by [Bitwiser names who were benefited by their support]. Because of their help and support we were able to [mention the accomplishment either project or training or organizational value add]';

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setNomination({...nomination, [key]: value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(nomination);
        createNomination(nomination);
        setShow(false);
    }

    const renderNominationText = () => {
        return `Hi ${user.attributes.name}, Recognize someone today`;
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <div className="mt-4 mb-4">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="bw" size="lg" onClick={handleShow}>{renderNominationText()}</Button>
                    </Col>
                </Row>
            </div>
            <Modal size="lg" show={show} onHide={handleClose} backdrop="static">
                <Form onSubmit={handleFormSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nomination</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Nominee</Form.Label>
                                <TagsInput value={nomination.nominee}
                                           onChange={(tags) => setNomination({...nomination, nominee: tags})}
                                           inputProps={{placeholder: 'Nominee'}}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Award</Form.Label>
                                <Form.Control as="select" value={nomination.nominationAwardId} name="nominationAwardId"
                                              onChange={handleChange} required>
                                    {awards.map(award => {
                                        return (
                                            <option key={award.id} value={award.id}>{award.title}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Categories</Form.Label>
                                <TagsInput value={nomination.categories}
                                           onChange={(tags) => setNomination({...nomination, categories: tags})}
                                           inputProps={{placeholder: 'Category'}}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Contribution</Form.Label>
                            <Form.Control name="nominationFor" as="textarea" rows="5" value={nomination.nominationFor}
                                          onChange={handleChange} required placeholder={nominationDescriptionPlaceHolder}/>
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="bw" type="submit">Nominate</Button>
                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </React.Fragment>
    )
}
export default NominationForm;
