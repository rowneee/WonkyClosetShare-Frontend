import React from 'react';
import { LogoutAction } from '/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/Actions/userActions.js';
import { connect } from 'react-redux';
// import { pushPath } from 'redux-simple-router';
import {withRouter} from 'react-router'

class Logout extends React.Component {
   componentWillMount () {
      this.props.dispatch(LogoutAction());
      this.props.history.push('/login')
      this.props.resetState()
   }



   render () {
       return null;
   }
};

export default withRouter(connect()(Logout));
