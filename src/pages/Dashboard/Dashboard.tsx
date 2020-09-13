import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "../../types";
import jwt_decode from "jwt-decode";
import { Button } from "@material-ui/core";

interface Token {
  username: string;
  email: string;
}

export const Dashboard = (props: Props) => {
  const user: Token = jwt_decode<Token>(String(localStorage.getItem("token")));

  return (
    <div>
      <h1>Hello! {user.username}</h1>
      <h1>Your email address is {user.email}</h1>
      <Button
        variant="outlined"
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
        color="secondary"
      >
        Log out
      </Button>
    </div>
  );
};

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Dashboard);
