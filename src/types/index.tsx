import { Action } from "redux";

export type Dispatch = (
    action: Action | Array<Action> | Promise<Action> | Promise<void> | any
  ) => any;