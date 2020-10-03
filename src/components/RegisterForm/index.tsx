import { connect, ConnectedProps } from "react-redux";
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { homePageAction } from "../../actions";
import { Dispatch } from "../../types";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="primary">Letter In Bottle</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterForm(props: Props) {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const classes = useStyles();
  const history = useHistory()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      username,
      password,
      email,
    };
    const res = await props.signUp(userData);
    if (res) {
      toast.success(`🦄 Welcome, ${res.data.data.username}!`, {
        position: "top-right",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => history.push("/dashboard")
        });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    input: string
  ) => {
    switch (input) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper + " animate__animated animate__fadeIn"}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, "username")
                }
                autoComplete="username"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="User Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, "email")
                }
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, "password")
                }
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                onClick={() => props.fetchLoginPage()}
                href="#"
                variant="body2"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box
        className="animate__animated animate__fadeInUp animate__delay-1s"
        mt={5}
      >
        <Copyright />
      </Box>
    </Container>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const mapStateToProps = (homeState: any) => ({
  homeState,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchLoginPage: () => dispatch(homePageAction.fetchLoginPage()),
  signUp: (userData: object) => dispatch(homePageAction.signUp(userData)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(RegisterForm);
