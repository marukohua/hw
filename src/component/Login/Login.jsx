import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { loginRequest } from '../../action/login';

function Login() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignIn = () => {
    setOpen(false);
    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;
    loginRequest(username, password);
  };

  return (
    <div>
      <h3>You must log in to view the page at /protected</h3>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Log in
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Username"
            label="Username"
            fullWidth
          />
          <TextField
            margin="dense"
            id="Password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSignIn} color="primary">
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;