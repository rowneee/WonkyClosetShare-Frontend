import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddToCloset extends React.Component {

  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    console.log("ATC", this.props);
    if (!this.props.isBorrowed) {
      return(
        <div>
        {this.props.item.status === "Not Borrowed"
          ?
          <>
          <Button
            key={this.props.item.id}
            text={this.props.item.name}
            onClick={this.props.turnOffDetails}
            onClick={this.handleClickOpen}
            variant="outlined"
            color="primary">
            ReQuEsT tO bOrRow
          </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              >
              <DialogTitle id="alert-dialog-title">{"ReQUEst pPoCeSSed!"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  CliCKIng ThaT AccePT BuTTTOn cOnFirmS yOu aRe ReQUesTing t0 BoRRow thIz IteM...
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={()=>this.props.requestToBorrowItem(this.props.item.id)} color="primary" autoFocus>
                  Request
                </Button>
              </DialogActions>
            </Dialog>
            </>
          :
          <>
          <Button
            key={this.props.item.id}
            text={this.props.item.name}
            onClick={()=>this.props.acceptBorrow(this.props.item.id)}
            onClick={this.props.turnOffDetails}
            >
            AcCePt BoRrOw ReQuEsT
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{"ReQUEst aCCepTed!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              YoU sUUUUUUUre YoU waNNA lEt thAT raNdO b00row yoUR sTUff?????
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          </>
        }
        </div>
      )
    }
  }
}


export default AddToCloset
