import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Fragment} from 'react';

import Posts from './containers/Posts/Posts';
import Profiles from './containers/Profiles/Profiles';
import Navigation from './containers/Navigation/Navigation';
import Login from './containers/Auth/Login/Login';
import Post from './containers/Posts/PostDetail/PostDetail';
import './App.css';

const app = props => {
  return (
    <Fragment>
      <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/posts' exact component={Posts} />
        <Route path='/user' exact component={Profiles} />
        <Route path='/login' exact component={Login} />
        <Route path = '/posts/:id' component={Post} />
      </Switch>
      </BrowserRouter>
    </Fragment>
    

  );
}

export default app;
