import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

export default function Loading(): JSX.Element {
  return (
    <div>
      <Backdrop open>
        <CircularProgress color="secondary" />
      </Backdrop>
    </div>
  );
}
