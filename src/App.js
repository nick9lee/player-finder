import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Fragment} from 'react';

import Posts from './containers/Posts/Posts';
import Profiles from './containers/Profiles/Profiles';
import Navigation from './containers/Navigation/Navigation';
import './App.css';

const app = props => {
  return (
    <Fragment>
      <Navigation />
      <BrowserRouter>
      <Switch>
        <Route path='/posts' component={Posts} />
        <Route path='/profiles' component={Profiles} />
      </Switch>
      </BrowserRouter>
    </Fragment>
    

  );
}

export default app;
