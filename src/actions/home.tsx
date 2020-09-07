import { Dispatch } from "../types";

export const fetchLoginPage = () => async (dispatch: Dispatch) => {
    await dispatch({type: 'LOADING'})
    await dispatch({type: "LOGIN_PAGE"})
}
export const fetchRegisterPage = () => async (dispatch: Dispatch) => {
    await dispatch({type: 'LOADING'})
    await dispatch({type: "REGISTER_PAGE"})
}