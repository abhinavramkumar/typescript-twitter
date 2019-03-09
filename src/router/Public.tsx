import * as React from 'react';
import {connect} from 'react-redux';
import {IStore} from '../types';
import {Route, RouteProps, Redirect} from 'react-router';

type IProps = IStateToProps & RouteProps & any;

const Public = ({isAuthenticated, component: Component, ...rest}: IProps) => (
  <Route
    {...rest}
    component={(props: any) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/signup" />
    }
  />
);

interface IStateToProps {
  isAuthenticated: boolean;
}

const mapStateToProps = ({user}: IStore): IStateToProps => ({
  isAuthenticated: !!user.uid,
});

export default connect(mapStateToProps)(Public);
