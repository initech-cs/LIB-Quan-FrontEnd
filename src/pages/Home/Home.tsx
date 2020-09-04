import React from "react";
import { Grid, makeStyles, Theme, Button } from "@material-ui/core";
import { CursorTracker } from "../../components";

export default function Home(): JSX.Element {
  const useStyles = makeStyles<Theme>((theme) => ({
    root: {
      flexGrow: 1,
      margin: "5%",
    },
    paper: {
      height: "50vh",
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    button: {
      width: "60%",
      height: "60%",
      fontSize: "36px",
      marginTop: "12px",
    },
  }));
  const classes = useStyles();

  const handleClick = (e: React.MouseEvent, button: string): void => {
    e.preventDefault();
    console.log("You clicked " + button);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <CursorTracker />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={(e: React.MouseEvent) => {
              handleClick(e, "SIGN_IN");
            }}
          >
            Sign In
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={(e: React.MouseEvent) => {
              handleClick(e, "REGISTER");
            }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
