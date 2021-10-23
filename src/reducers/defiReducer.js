import {GET_CURRENT_DEFI, GET_DEFIS, SET_ERROR_MSG} from "../constants/constants";
import {defisList} from "../data/data";

const initialState = {
    defis: defisList,
    currentDefi:null
};
function defiReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DEFIS:
            return {
                defis: action.payload
            };
        case GET_CURRENT_DEFI:
            return {
                currentDefi: action.payload
            };
        case SET_ERROR_MSG:
            return {
                ...state,
                defis: state.defis.map(defi => defi.id === action.payload.id ?
                    { ...defi, errorMsg: action.payload.errorMsg } : defi)
            }
        default:
            return state;
    }
}
export default defiReducer;