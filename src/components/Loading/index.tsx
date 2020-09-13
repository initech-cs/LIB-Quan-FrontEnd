import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

export default function Loading(): JSX.Element {
  return (
    <div>
      <Backdrop style={{position: "absolute", zIndex: 10000}} open>
        <CircularProgress color="secondary" />
      </Backdrop>
    </div>
  );
}
