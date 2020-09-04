import React, { useRef, MutableRefObject } from "react";
import { makeStyles } from "@material-ui/core";

export default function CursorTracker(): JSX.Element {
  const leftEye = useRef<HTMLDivElement>(null);
  const rightEye = useRef<HTMLDivElement>(null);

  let eyeballs: Array<MutableRefObject<any>> = [leftEye, rightEye];

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
  const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    envelope: {
      position: "relative",
      height: "300px",
      width: "500px",
      background: "#353b48",
    },
    button: {
      width: "60%",
      height: "60%",
      fontSize: "36px",
      marginTop: "12px",
    },
    opener: {
      width: "0",
      height: "0",
      borderLeft: "250px solid transparent",
      borderRight: "250px solid transparent",
      borderTop: "200px solid #dcdde1",
    },
    eyes: {
      position: "relative",
      display: "flex",
      justifyContent: "space-around",
      top: "0",
    },
    eye: {
      position: "relative",
      width: "80px",
      height: "80px",
      display: "block",
      background: "#fff",
      margin: "0 15px",
      borderRadius: "50%",

      "&::before": {
        content: "''",
        position: "absolute",
        top: "50%",
        left: "25px",
        transform: "translate(-50%,-50%)",
        width: "40px",
        height: "40px",
        background: "#333",
        borderRadius: "50%",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div onMouseMove={(e: React.MouseEvent) => eyeball(e)}>
      <div className={classes.envelope}>
        <div className={classes.opener}></div>
        <div className={classes.eyes}>
          <div ref={leftEye} className={classes.eye}></div>
          <div ref={rightEye} className={classes.eye}></div>
        </div>
      </div>
    </div>
  );
}
