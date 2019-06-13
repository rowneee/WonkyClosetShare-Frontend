import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class NavBar extends React.Component {
  navbarLinks() {
    if (this.props.authenticated) {
      return [
        <h3 key="secret">
          <Link to="/secret">
            Secret
          </Link>
        </h3>,
        <h3 key="signout">
          <Link to="/signout">
            Sign out
          </Link>
        </h3>
      ];
    }
    return [
      <div key="login">
        <Link to="/login">
          Login /
        </Link>
      </div>,
      <div key="signup">
        <Link to="/signup">
          Sign up
        </Link>
      </div>
    ];
  }
  render() {
    const { title, color, icon } = this.props
    return (
      <>
      <div className='navbar' style={{margin: 0}}>
        <div class="dropdown item">
          <button class="dropbtn">
            <Link
              className='item'
              to="/">
              <h2 className="ui header">
                <div className="content">
                  <img src="/Users/ronishabo/Flatiron/Mod_5/WonkyClosetShare/WonkyClosetShare-Frontend/my-project-client/src/images/alex.jpg"></img>
                </div>
              </h2>
            </Link>
          </button>
        </div>
        <div class="dropdown item">
          <button class="dropbtn">
            <div className="item">
              <Link to="/discover">
                DISCOVER
              </Link>
            </div>
          </button>
          <div class="dropdown-content">
            <a href="#">Find Some Clothes</a>
            <a href="#">Currently Borrowing</a>
            <a href="#">Explore</a>
          </div>
        </div>
        {this.props.isLoggedIn ?
          <div class="dropdown item">
            <button class="dropbtn">
              <div className="item">
                <Link to="/profile">
                  MY PROFILE
                </Link>
              </div>
            </button>
          </div>
        :
        <div className="container">
          <Link to="/">
            {this.navbarLinks()}
          </Link>
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
