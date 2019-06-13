import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { LOGIN } from '../../Actions/types';
import { login } from '../../Actions/userActions';
import { itemsFetch } from '../../Actions/userActions'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    })
      .then(r => r.json())
      .then(data => {
        console.log("login data", data);
        const { token, user } = data
        localStorage.setItem('token', token)
        this.props.login(user)
        this.props.fetchItems()
      })
  }

  render() {
    console.log('LOGIN FORM props: ', this.props)
    return (
      <Fragment>
      <div style={{marginTop: '10%'}} className="row">
          <form  onSubmit={this.handleLoginSubmit} className="col s12 m4 offset-m4">
            <div className="card">
              <div className="card-action cyan lighten-2 white-text">
                <h3>Login Form</h3>
              </div>
              <div className="card-content">
              // { !this.props.failedLogin ? null : this.props.error }
                <div className="form-field">
                  <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value={this.state.username} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <input onChange={this.handleChange} type='password' name="password" placeholder="Password" value={this.state.password} required autoComplete="off" />
                </div><br />

                <div className="form-field">
                  <button className="btn-large waves-effect waves-dark cyan lighten-2" type="submit" style={{width: '100%', fontFamily: 'Hammersmith One, sans-serif'}}>
                    Login
                  </button>
                </div>

              </div>

            </div>
          </form>
        </div>
            First time here? <Link to="/signup">Sign Up</Link>
      </Fragment>
    )
  }
}

export default connect(null, { login })(Login)
