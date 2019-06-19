import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { LOGIN } from '../../Actions/types';
import { login } from '../../Actions/userActions';
import { itemsFetch } from '../../Actions/userActions'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'

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
        const { token, user } = data
        localStorage.setItem('token', token)
        this.props.login(user)
        this.props.fetchItems(user)
        this.props.getNotifications(user)
        this.props.history.push('/')
      })
  }

  render() {
    return (
      <Fragment>

      <div style={{marginTop: '10%'}} className="row">
          <form  onSubmit={this.handleLoginSubmit} className="col s12 m4 offset-m4">
            <div className="login-card">
              <div className="login-header">
                <h3 className="login-title">LoGIN</h3>
              </div>
              <div className="login-body">
                <div className="form-field login-body__email">
                  <input onChange={this.handleChange} type='text' name="username" placeholder="Username" value={this.state.username} required autoComplete="off" />
                </div><br />

              <div className="form-field login-body__email">
                  <input onChange={this.handleChange} type='password' name="password" placeholder="Password" value={this.state.password} required autoComplete="off" />
                </div><br />

              <div className="form-field login-body__email">
                  <button className="login-body__submit" type="submit" style={{fontFamily: 'Hammersmith One, sans-serif'}}>
                    <p className="submit-button">
                    suBmIT
                    </p>
                  </button>
                </div>
                <p className="first-time">
                  First time here? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default connect(null, { login })(Login)
