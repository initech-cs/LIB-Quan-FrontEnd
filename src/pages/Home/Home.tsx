import React, { useRef, MutableRefObject } from "react";
import { Dispatch } from "../../types";
import { Grid, Button } from "@material-ui/core";
import { connect, ConnectedProps } from "react-redux";
import { homePageAction } from "../../actions";
import "./styles.scss";

const Home = (props: Props): JSX.Element => {
  const leftEye = useRef<HTMLDivElement>(null);
  const rightEye = useRef<HTMLDivElement>(null);
  let eyeballs: Array<MutableRefObject<any>> = [leftEye, rightEye];

  const handleClick = (e: React.MouseEvent, button: string): void => {
    e.preventDefault();
    if (button === 'SIGN_IN') props.fetchLoginPage();
    if (button === 'REGISTER') props.fetchRegisterPage();
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
      {console.log(props)}
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={3}
        className="root"
      >
        <Grid item xs={12} lg={6}>
          <div className="envelope">
            <div className="opener"></div>
            <div className="eyes">
              <div ref={leftEye} className="eye"></div>
              <div ref={rightEye} className="eye"></div>
            </div>
          </div>
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
};

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux

const mapStateToProps = (homeState: any) => ({ homeState });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchLoginPage: () => dispatch(homePageAction.fetchLoginPage()),
  fetchRegisterPage: () => dispatch(homePageAction.fetchRegisterPage())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Home);
