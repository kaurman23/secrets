//this is a root reducer and its point is to bring together all the reducers
import { combineReducers } from 'redux';
import secretReducer from "./secretReducer";

export default combineReducers({
    secrets:secretReducer
})