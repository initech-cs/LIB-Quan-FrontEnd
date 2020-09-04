import loadable, { LoadableComponent } from "@loadable/component";
import { Loading } from "../../components";
import React from "react";

const Home: LoadableComponent<Pick<any, string | number | symbol>> = loadable(
  () => import('./Home'),
  {
    fallback: <Loading />,
  }
);

export default (props: any) => <Home {...props} />;
