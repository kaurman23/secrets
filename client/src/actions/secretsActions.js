import {GET_SECRETS,ADD_SECRETS} from "./type";

export const getSecrets = () => {
    return {
        type: GET_SECRETS
    }
}

export const addSecrets = (secret) => {
    return {
        type: ADD_SECRETS,
        payload: secret
    }
}