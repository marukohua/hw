import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import { loginRequest } from "../../action/login";

function Login() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const [checkUsername, verifyUsername] = React.useState(false);
  const [checkPassword, verifyPassword] = React.useState(false);
  const handleSignIn = () => {
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    if (username === "") {
      verifyUsername(true);
    } else {
      verifyUsername(false);
    }
    if (password === "") {
      verifyPassword(true);
    } else {
      verifyPassword(false);
    }
    if (username !== "" && password !== "") {
      dispatch(loginRequest(username, password));
    }
  };

  const status = useSelector(state => state.status);
  if (
    status === "Logged in" ||
    status === "Login cancel" ||
    status === "Login error"
  ) {
    setOpen(false);
  }

  const style = {
    color: "#F44336"
  };

  return (
    <div>
      <h3>You must log in to view the page at /protected</h3>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Log in
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Username"
            label="Username"
            fullWidth
            required
            error={Boolean(checkUsername)}
            helperText={checkUsername ? "This is a required field." : ""}
          />
          <TextField
            margin="dense"
            id="Password"
            label="Password"
            type="password"
            fullWidth
            required
            error={Boolean(checkPassword)}
            helperText={checkPassword ? "This is a required field." : ""}
          />
          <DialogContentText style={style}>
            {status === "Incorrect username or password."
              ? "Incorrect username or password."
              : ""}
          </DialogContentText>
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
}

export default Login;
