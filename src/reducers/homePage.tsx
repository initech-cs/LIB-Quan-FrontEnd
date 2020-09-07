import { Action } from "redux";

type homeState = {
    readyStatus: String
}

type State = homeState

const initialState = {
    readyStatus: 'HOME_PAGE'
};


export default function reducer(state: State = initialState, action: Action ) {
    switch (action.type){
        case "LOADING":
            return {
                ...state,
                readyStatus: "LOADING"
            }
        case "LOGIN_PAGE":
            return {
                ...state,
                readyStatus: "LOGIN_PAGE"
            }
        case "REGISTER_PAGE":
            return {
                ...state,
                readyStatus: "REGISTER_PAGE"
            }
        default:
            return state;
    }
}