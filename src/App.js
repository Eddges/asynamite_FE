import React from 'react';
import Layout from './Components/Layout/Layout';
import {Route} from 'react-router-dom'
import Contests from './Components/Contests/Contests';
import LandingPage from './Components/LandingPage/LandingPage.component';
import Practice from './Components/Practice/Practice';
import SignInPage from './Components/LoginRegister/Login/signin.component';
import Register from './Components/LoginRegister/Register/register.component';
import Results from './Components/Result/result.component';
import Dashboard from './Components/DashBoard/dashboard.component';
import ContestDetails from './Components/ContestDetails/ContestDetails';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact render={() => <LandingPage />} />
      <Route path="/contests" exact render={() => <Contests />} />
      <Route path="/practice" exact render={() => <Practice />} />
      <Route path="/login" exact render={() => <SignInPage />} />
      <Route path="/register" exact render={() =>  <Register/> } />
      <Route path="/results" exact render={() =>  <Results/> } />
      <Route path="/dashboard" exact render={() =>  <Dashboard/> } />
      <Route path="/contest_details" exact render={() =>  <ContestDetails/> } />
    </React.Fragment>
  );
}

export default App;
