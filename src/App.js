import React from 'react';
import Layout from './Components/Layout/Layout';
import {Route} from 'react-router-dom'
import Contests from './Components/Contests/Contests';
import LandingPage from './Components/LandingPage/LandingPage.component';
import SignInPage from './Components/SignInPage/signin.component';

const App = () => {
  return (
    <React.Fragment>
<<<<<<< HEAD
    
        {/* <LandingPage/> */}
        <SignInPage/>
=======
      <Route path="/home" exact render={() => <LandingPage />} />
      <Route path="/contests" exact render={() => <Contests />} />
      
>>>>>>> 0dda82899c04c5a162a7fcfc28f5f70baa09b028
      
    </React.Fragment>
  );
}

export default App;
