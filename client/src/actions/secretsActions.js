import axios from 'axios';
import {GET_SECRETS,ADD_SECRETS, LOADING} from "./type";

export const getSecrets = () => dispatch  => {
    dispatch(setSecretsLoading);
    
    axios
        .get('/api/v1/secrets')
        .then(res => {dispatch({
            type: GET_SECRETS,
            payload:res.data.data
        });
        console.log('res is', res.data.data);
    })
}

export const addSecrets = (secret) => (dispatch) => {
    axios
        .post('/api/v1/secrets',secret)
        .then(res => {dispatch({
            type: ADD_SECRETS,
            payload: res.data.data
        })})
}

export const setSecretsLoading = () => {
    return {
        type: LOADING
    }
}