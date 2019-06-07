import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction } from '/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/Actions/Actions.js';
import { connect } from 'react-redux';

class Signin extends Component {
  submit = (values) => {
    this.props.signInAction(values, this.props.history);
  }
  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form">
        <div className="container">
          <h2>Sign In</h2>
          <form onSubmit={ handleSubmit(this.submit) }>
            <Field name="email"
                   component="input"
                   type="text"
                   placeholder="Email"
            />
            <Field name="password"
                   component="input"
                   type="password"
                   placeholder="Password"
            />
            <button type="submit" className="blue">Sign In</button>
          </form>
          {this.errorMessage()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
  form: 'signin'
})(Signin);

export default connect(mapStateToProps, {signInAction})(reduxFormSignin);
