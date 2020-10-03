import { Dispatch } from '../types'
import axios from 'axios'
import { toast } from "react-toastify";



export const fetchLoginPage = () => async (dispatch: Dispatch) => {
  await dispatch({ type: 'LOADING' })
  await dispatch({ type: 'LOGIN_PAGE' })
}
export const fetchRegisterPage = () => async (dispatch: Dispatch) => {
  await dispatch({ type: 'LOADING' })
  await dispatch({ type: 'REGISTER_PAGE' })
}

export const loginUser = (userData: object) => async (dispatch: Dispatch) => {
  await dispatch({ type: 'LOADING' })
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + '/login',
      userData,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      },
    );
    if (res) {
      localStorage.setItem("token", res.data.token);
      return res
    }
  } catch (error) {
    await dispatch({ type: 'LOGIN_PAGE' })
    toast.error(`Tough luck! ${error.message}`, {
      position: "top-right",
      autoClose: 2800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
}

export const signUp = (userData: object) => async (dispatch: Dispatch) => {
  await dispatch({ type: "LOADING" });
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + '/users',
      userData,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
    )
    if (res) {
      localStorage.setItem('token', res.data.data.token)
      return res
    }
  } catch (error) {
    await dispatch({ type: "REGISTER_PAGE" });
    toast.error(`Tough luck! ${error.message}`, {
      position: "top-right",
      autoClose: 2800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  
}
