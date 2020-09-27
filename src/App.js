import React from 'react';
import Layout from './Components/Layout/Layout';
import {Route} from 'react-router-dom'
import Contests from './Components/Contests/Contests';
import LandingPage from './Components/LandingPage/LandingPage.component';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/home" exact render={() => <LandingPage />} />
      <Route path="/contests" exact render={() => <Contests />} />
      
      
    </React.Fragment>
  );
}

export default App;
