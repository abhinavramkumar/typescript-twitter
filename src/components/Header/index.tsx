import * as React from 'react';
import {connect} from 'react-redux';
import {IStore} from '../../types';

// common
// Brand

// on not Auth
// Login Form

// on Auth
// search
// profile dropdown
// navigation

type IProps = IStateToProps;

const Header = ({isAuthenticated}: IProps) => (
  <div>
    <h1>Header</h1>
  </div>
);

interface IStateToProps {
  isAuthenticated: boolean;
}

const mapStateToProps = ({user}: IStore): IStateToProps => ({
  isAuthenticated: !!user.uid,
});

export default connect(mapStateToProps)(Header);
