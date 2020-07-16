import React from 'react';
import {AmplifyAuthenticator, AmplifySignIn, AmplifySignUp} from "@aws-amplify/ui-react";
import {Row, Col} from "react-bootstrap";

const AuthPage = () => {
    return (
        <div className="container-fluid">
            <Row className="justify-content-md-center mt-5">
                <Col md="auto">
                    <AmplifyAuthenticator>
                        <AmplifySignUp
                            slot="sign-up"
                            formFields={[
                                {
                                    type: "username",
                                    label: "Username",
                                    placeholder: "username",
                                    required: true,
                                },
                                {
                                    type: "password",
                                    label: "Password",
                                    required: true,
                                },
                                {
                                    type: "email",
                                    label: "Email",
                                    placeholder: "john.doe@youremail.com",
                                    required: true,
                                },
                                {
                                    type: "phone_number",
                                    label: "Custom Phone Label",
                                    placeholder: "custom Phone placeholder",
                                    required: false,
                                },
                                {
                                    type: "name",
                                    label: "Name",
                                    placeholder: "John Doe",
                                    required: true,
                                },
                            ]}
                        />
                        <AmplifySignIn headerText="Bitwise Rewards and Recognition" slot="sign-in"/>
                    </AmplifyAuthenticator>
                </Col>
            </Row>

        </div>
    )
}
export default AuthPage;
