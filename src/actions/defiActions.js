import {GET_CURRENT_DEFI, GET_DEFIS, SET_ERROR_MSG} from "../constants/constants";
import {defisList} from "../data/data";

export const getDefis = () => {
    return {
        type:GET_DEFIS,
        payload: defisList
    };
}

export const getCurrentDefi = (defi) => {
    return {
        type:GET_CURRENT_DEFI,
        payload: defi
    };
}
export const setErrorMsg = (payload) => {
    return {
        type:SET_ERROR_MSG,
        payload: payload
    };
}
