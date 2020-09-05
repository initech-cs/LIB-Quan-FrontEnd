import React, { useRef, MutableRefObject } from "react";
import { Grid, Button } from "@material-ui/core";
import { CursorTracker } from "../../components";
import "./styles.scss";

export default function Home(): JSX.Element {
  const leftEye = useRef(null);
  const rightEye = useRef(null);
  let eyeballs: Array<MutableRefObject<any>> = [leftEye, rightEye];

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
    <div onMouseMove={(e: React.MouseEvent): void => eyeball(e)}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}
        className="root"
      >
        <Grid item xs={12} lg={6}>
          <CursorTracker leftEye={leftEye} rightEye={rightEye} />
        </Grid>
        <Grid item xs={12} lg={6} className="buttons">
          <Button
            className="button"
            variant="contained"
            color="primary"
            onClick={(e: React.MouseEvent) => {
              handleClick(e, "SIGN_IN");
            }}
          >
            Sign In
          </Button>
          <Button
            className="button"
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
