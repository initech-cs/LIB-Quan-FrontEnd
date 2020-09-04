import React, { useRef, MutableRefObject } from "react";
import { Grid, makeStyles, Theme, Button } from "@material-ui/core";
import { CursorTracker } from "../../components";

export default function Home(): JSX.Element {
  const leftEye = useRef(null)
  const rightEye = useRef(null)
  let eyeballs: Array<MutableRefObject<any>> = [leftEye, rightEye];

  const useStyles = makeStyles<Theme>((theme) => ({
    root: {
      flexGrow: 1,
      margin: '0',
      padding: "5%",
      height: '100vh',
      width: '100%',
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

  const eyeball = (e: React.MouseEvent): void => {
    eyeballs.forEach((eye) => {
      let x =
        eye.current?.getBoundingClientRect().left +
        eye.current?.clientWidth / 2;
      let y =
        eye.current?.getBoundingClientRect().top +
        eye.current?.clientHeight / 2;
      let radian = Math.atan2(e.pageX - x, e.pageY - y);
      let rot = radian * (180 / Math.PI) * -1 + 270;
      eye.current.style.transform = "rotate(" + rot + "deg)";
    });
  };

  return (
    <div onMouseMove={(e: React.MouseEvent): void => eyeball(e)} className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <CursorTracker leftEye={leftEye} rightEye={rightEye}/>
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
