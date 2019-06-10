import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGIN } from '/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/Actions/types.js';
import { login } from '/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/Actions/userActions.js';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
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
      })
  }

  render() {
    console.log('LOGIN FORM props: ', this.props)
    return (
      <div>
        Login Form
        <form onSubmit={this.handleSubmit}>
          <input
            name='username'
            onChange={this.handleChange}
            value={this.state.username}
            type="text"
          />
          <input
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
            type="text"
          />
          <button
            className="ui primary button"
            type="submit"
          >
            Login
          </button>
        </form>

      </div>
    )
  }
}

export default connect(null, { login })(Login)
