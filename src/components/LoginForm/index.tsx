import { connect, ConnectedProps } from "react-redux";
import React, { FormEvent, useState, ChangeEvent } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="secondary">Letter In Bottle</Link> {new Date().getFullYear()}
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginForm(props: Props) {
  const history = useHistory();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const classes = useStyles();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const input = { username, password };
    e.preventDefault();
    const res = await props.loginUser(input);
    if (res) history.push("/dashboard");
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>, form: string) => {
    if (form === "username") {
      setUserName(e.target.value);
    }
    if (form === "password") {
      setPassword(e.target.value);
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
          Sign in
        </Typography>
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="userName"
            autoComplete="userName"
            autoFocus
            value={username}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleChange(e, "username")
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleChange(e, "password")
            }
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                onClick={() => props.fetchRegisterPage()}
                href="#"
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box
        className="animate__animated animate__fadeInUp animate__delay-1s"
        mt={8}
      >
        <Copyright />
      </Box>
    </Container>
  );
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const mapStateToProps = (homeStatus: any) => ({
  homeStatus,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRegisterPage: () => dispatch(homePageAction.fetchRegisterPage()),
  loginUser: (userData: object) => dispatch(homePageAction.loginUser(userData)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(LoginForm);
