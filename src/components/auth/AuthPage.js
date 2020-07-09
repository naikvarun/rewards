import React from 'react';
import {AmplifyAuthenticator, AmplifySignIn, AmplifySignUp} from "@aws-amplify/ui-react";

const AuthPage = () => {
    return (
        <div>
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
            <AmplifySignIn slot="sign-in" />
        </AmplifyAuthenticator>
</div>
    )
}
export default AuthPage;
