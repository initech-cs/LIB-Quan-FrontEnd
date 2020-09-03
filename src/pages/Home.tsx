import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid, Paper, makeStyles, Theme, Button } from "@material-ui/core";

export const Home: FC<RouteComponentProps> = (): JSX.Element => {
  const useStyles = makeStyles<Theme>((theme) => ({
    root: {
      flexGrow: 1,
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
      marginTop: '12px'
    },
  }));
  const classes = useStyles();

  const handleClick = (e: React.MouseEvent, button: string): void => {
    e.preventDefault();
    console.log("You clicked " + button);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={(e) => {
              handleClick(e, "SIGN_IN");
            }}
          >
            Sign In
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={(e: React.MouseEvent): void => {
              handleClick(e, "REGISTER");
            }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
