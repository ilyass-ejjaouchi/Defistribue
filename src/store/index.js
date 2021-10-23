import {createStore, combineReducers} from 'redux';
import defiReducer from '../reducers/defiReducer';

const reducer = combineReducers({defiReducer: defiReducer});
const initialState = {};
const store = createStore(reducer, initialState);
export default store;