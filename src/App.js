import React from 'react';
import Layout from './Components/Layout/Layout';
import {Route} from 'react-router-dom'
import Contests from './Components/Contests/Contests';
import LandingPage from './Components/LandingPage/LandingPage.component';
import SignInPage from './Components/LoginRegister/Login/signin.component';
import Register from './Components/LoginRegister/Register/register.component';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/home" exact render={() => <LandingPage />} />
      <Route path="/contests" exact render={() => <Contests />} />
      <Route path="/login" exact render={() => <SignInPage />} />
      <Route path="/register" exact render={() =>  <Register/> } />
      
      
    </React.Fragment>
  );
}

export default App;
