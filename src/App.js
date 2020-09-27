import React from 'react';
import Layout from './Components/Layout/Layout';
import {Route} from 'react-router-dom'
import Contests from './Components/Contests/Contests';

const App = () => {
  return (
    <React.Fragment>
      <Route to="/contests" exact render={() => <Contests />} />
    </React.Fragment>
  );
}

export default App;
