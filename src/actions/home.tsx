import { Dispatch } from "../types";
import axios from "axios";

export const fetchLoginPage = () => async (dispatch: Dispatch) => {
  await dispatch({ type: "LOADING" });
  await dispatch({ type: "LOGIN_PAGE" });
};
export const fetchRegisterPage = () => async (dispatch: Dispatch) => {
  await dispatch({ type: "LOADING" });
  await dispatch({ type: "REGISTER_PAGE" });
};

export const loginUser = (userData: object) => async (dispatch: Dispatch) => {
  // await dispatch({ type: "LOADING" });
  const data = await axios.post(
    process.env.REACT_APP_API_URL + "/login",
    userData,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};
