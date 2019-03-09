import * as React from 'react';
import {Router, Switch, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import NotFound from '../screens/NotFound';
import Home from '../screens/Home';
import Private from './Private';
import Explore from '../screens/Explore';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import RelatedUsers from '../screens/RelatedUsers';
import Settings from '../screens/Settings';
import Trends from '../screens/Trends';
import Header from '../components/Header';
import Signup from '../screens/Signup';

interface IProps {}

export const history = createHistory();

const AppRouter = (props: IProps) => (
  <Router history={history}>
    <>
      <Header />
      <Switch>
        <Route to="/" component={Home} exact={true} />
        <Route to="/sign-up" component={Signup} />
        <Route to="/explore" component={Explore} />
        <Route to="/notifications" component={Notifications} />
        <Route to="/profile/:username" component={Profile} />
        <Route to="/related-users" component={RelatedUsers} />
        <Route to="/settings" component={Settings} />
        <Route to="/trends" component={Trends} />
        <Route component={NotFound} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
