import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { SIGNUP } from '../../Actions/types';
import { signup } from '../../Actions/userActions';

class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    signedUp: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ signedUp: true })
    this.props.signUpUser(this.state.username, this.state.password)
  }

  renderSignUpForm = () => {
    return (
      <div>
        <Fragment>
          <div style={{marginTop: '10%'}} className="row">
            <form onSubmit={this.handleSubmit} className="col s12 m4 offset-m4">
              <div className="login-card">
                <div className="login-header">
                  <h3 className="login-title" >SiGn Up</h3>
                </div>
                <div className="login-body">
                  <div className="form-field login-body__email">
                    <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value={this.state.username} required autoComplete="off" />
                  </div><br />
                  <div className="form-field login-body__email">
                    <input onChange={this.handleChange} type='password' name="password" placeholder="Password" value={this.state.password} required autoComplete="off" />
                  </div><br />
                  <div className="form-field login-body__email">
                    <button className="login-body__submit" type="submit">
                      <p className="submit-button">
                      suBmIT
                      </p>
                    </button>
                    </div>
                    <p className="first-time">
                      AlreADY HaVE An aCCount?! <Link to="/login">LawG In</Link>
                    </p>
                </div>
              </div>
            </form>
          </div>

        </Fragment>
      </div>
    )
  }
  render() {
    return (
      this.state.signedUp ? <Redirect to="/login" /> : <div>{this.renderSignUpForm()}</div>
    )
  }
}

  const mapDispatchToProps = dispatch => {
    console.log("dispatch", dispatch);
  // return {
  //   signup: (username, password) => dispatch(signup(username, password))
  // }
}


export default connect(null, mapDispatchToProps)(SignUp)
