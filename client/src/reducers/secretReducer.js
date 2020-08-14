import shortid from 'shortid';
import {GET_SECRETS,ADD_SECRETS,LOADING} from "../actions/type";

const initialState = {
    secrets: [
   ] 
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_SECRETS:
            return {
                ...state,
                secrets: action.payload,
                loading: false
            }
        case ADD_SECRETS:
            return {
                ...state,
                secrets: [action.payload, ...state.secrets ]
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
