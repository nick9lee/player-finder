import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Posts from './containers/Posts/Posts';
import './App.css';

const app = props => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/posts' component={Posts} />
    </Switch>
    </BrowserRouter>
  );
}

export default app;
