import shortid from 'shortid';
import {GET_SECRETS,ADD_SECRETS} from "../actions/type";

const initialState = {
    secrets: [
        {id: shortid.generate(), text: "It's"},
        {id: shortid.generate(), text: "Britney"},
        {id: shortid.generate(), text: "Bitch"}
    ] 
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_SECRETS:
            return {
                ...state
            }
        case ADD_SECRETS:
            return {
                ...state,
                secrets: [action.payload, ...state.secrets ]
            }
        default:
            return state;
    }
}
