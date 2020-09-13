import loadable, { LoadableComponent } from "@loadable/component";
import { Loading } from "../../components";
import React from "react";

const Dashboard: LoadableComponent<Pick<any, string | number | symbol>> = loadable(
  () => import('./Dashboard'),
  {
    fallback: <Loading />,
  }
);

export default (props: any) => <Dashboard {...props} />;
