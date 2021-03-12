import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Posts from './containers/Posts/Posts';
import Profiles from './containers/Profiles/Profiles';
import './App.css';

const app = props => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/posts' component={Posts} />
      <Route path='/profiles' component={Profiles} />
    </Switch>
    </BrowserRouter>
  );
}

export default app;
