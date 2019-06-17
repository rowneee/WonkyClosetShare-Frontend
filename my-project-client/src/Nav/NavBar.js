import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class NavBar extends React.Component {

  render() {
    const { title, color, icon } = this.props
    return (
      <>
      <div className='navbar' style={{margin: 0}}>
        <div className="dropdown">
          <button className="dropbtn">
            <Link
              className='item'
              to="/">
              <h2 className="ui header">
                <div className="content">
                  <h2 className="home-icon">
                    WoNkY
                  </h2>
                </div>
              </h2>
            </Link>
          </button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">
            <div className="item">
              <Link to="/discover">
                <h2 className="item">
                  DISCOVER
                </h2>
              </Link>
            </div>
          </button>
          <div className="dropdown-content">
            <a href="#">Find Some Clothes</a>
            <a href="#">Currently Borrowing</a>
            <a href="#">Explore</a>
          </div>
        </div>
        {this.props.isLoggedIn ?
        <div>
          <div className="dropdown">
            <button className="dropbtn">
              <div className="item">
                <Link to="/profile">
                  <h2 className="item">
                  MY CLOSET
                  </h2>
                </Link>
              </div>
            </button>
          </div>
          <div>
            <h3 key="Notification" className="auth">
              <Link to="/notifications">
                Notifications
              </Link>
            </h3>
          </div>
          <div>
            <div className="dropdown">
              <button className="dropbtn">
                <div className="item">
                  <Link to="/profile">
                    <h2 className="right icon">
                      <Icon name="user icon" size="large"/>
                    </h2>
                  </Link>
                </div>
              </button>
              <div className="dropdown-content">
                <Link to="/logout">
                  Logout
                </Link>
                <a href="#">Currently Borrowing</a>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="container" className="auth">
          <div className="dropdown">
            <button className="dropbtn">
              <div className="item">
                <Link to="/profile">
                  <Icon name="user icon" size="large" />
                </Link>
              </div>
            </button>
            <div className="dropdown-content">
              <Link to="/login">
                Login
              </Link>
              <div key="signup">
                <Link to="/signup">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
      </>
    );
  }
}

// function mapStateToProps(state) {
//   // console.log("here", state.auth);
//   return {
//     authenticated: state.auth.authenticated
//   };
// }
export default connect()(NavBar);

//   render() {
//   //   console.log('Navbar starts rendering');
//   //   console.log('state is', this.state, this);
//     // const { title, color, icon } = this.props
//     return (
//       <div className='ui tabular menu'>
//         <Link
//           className='item'
//           to="/"
//         >
//           <h2 className="ui header">
//             <div className="content">
//               Home
//             </div>
//           </h2>
//         </Link>
//         <div className="item">
//           <Link to="/discover">
//             DISCOVER
//           </Link>
//         </div>
//         <div className="item">
//           <Link to="/signin">
//             Sign In
//           </Link>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Navbar
