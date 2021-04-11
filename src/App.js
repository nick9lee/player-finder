import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Fragment} from 'react';

import Posts from './containers/Posts/Posts';
import Profiles from './containers/Profiles/Profiles';
import Navigation from './containers/Navigation/Navigation';
import Login from './containers/Auth/Login/Login';
import Post from './containers/Posts/PostDetail/PostDetail';
import Signup from './containers/Auth/Signup/Signup';
import NewPost from './containers/Posts/NewPost/NewPost';
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
        <Route path='/signup' exact component={Signup} />
        <Route path='/posts/new' exact component={NewPost} />
        <Route path = '/posts/:id' component={Post} />
      </Switch>
      </BrowserRouter>
    </Fragment>
    

  );
}

export default app;
