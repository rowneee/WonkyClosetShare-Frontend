import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

// import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends React.Component {

  render() {
    const { title, color, icon } = this.props
    return (
      <>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={24} alignItems="baseline">
            <Grid item xs={12} className="grid-button">
              <div className="dropdown">
                <IconButton className="dropbtn">
                  <Link
                    className='item'
                    to="/">
                    <h2 className="ui header">
                      <div className="content">
                        <h2 className="home-icon" style={{color:"white"}}>
                          WoNkY
                        </h2>
                      </div>
                    </h2>
                  </Link>
                </IconButton>
              </div>
              <div className="dropdown">
                <IconButton className="dropbtn">
                  <div className="item">
                    <Link to="/discover">
                      <h2 className="item">
                        DISCOVER
                      </h2>
                    </Link>
                  </div>
                </IconButton>
                <div className="dropdown-content">
                  <a href="#">Find Some Clothes</a>
                  <a href="#">Explore</a>
                </div>
              </div>
              {this.props.isLoggedIn ?
              <div>
                <div className="dropdown">
                  <IconButton className="dropbtn">
                    <div className="item">
                      <Link to="/profile">
                        <h2 className="item">
                        MY CLOSET
                        </h2>
                      </Link>
                    </div>
                  </IconButton>
                </div>
                <div className="dropdown" style={{float: "right", marginTop: "14px", marginLeft: "5px"}}>
                  <IconButton className="dropbtn">
                    <div>
                      <h3 key="Notification" className="auth">
                        <Link to="/notifications">
                          <a>
                            <Icon name='bell outline' style={{color:"red"}}/>
                          </a>
                        </Link>
                      </h3>
                    </div>
                  </IconButton>
                </div>
                <div>
                  <div className="dropdown right-icon" style={{float: "right"}}>
                    <IconButton className="dropbtn">
                      <div className="item right-item">
                        <Link to="/profile">
                            <Icon name="user icon" size="large" style={{color:"white"}}/>
                        </Link>
                      </div>
                    </IconButton>
                    <div className="dropdown-content">
                      <Link to="/logout">
                        Logout
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
              :
              <div className="container" className="auth">
                <div className="dropdown">
                  <IconButton className="dropbtn">
                    <div className="item">
                      <Link to="/profile">
                        <Icon name="user icon" size="large" />
                      </Link>
                    </div>
                  </IconButton>
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
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
