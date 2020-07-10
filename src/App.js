import React, {useContext} from 'react';
import './App.css';
import {Amplify} from "aws-amplify";
import awsConfig from './aws-exports';
import { UserContext } from "./context/UserContext";
import {AuthState} from "@aws-amplify/ui-components";
import AuthPage from "./components/auth/AuthPage";
import HomePage from "./components/HomePage";
import AwardContextProvider from "./context/AwardsContextProvider";
import Header from "./components/Header";

Amplify.configure(awsConfig);
function App() {

  const { authState, user } = useContext(UserContext);

  return authState === AuthState.SignedIn && user ? (
   <AwardContextProvider >
       <Header />
     <HomePage />
   </AwardContextProvider>
  ) : (
      <AuthPage />
  )
}

export default App;
