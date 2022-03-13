import { apiUrlEmojis } from "../../components/utils/constants";

export const GET_EMOJIS_REQUEST = 'EMOJIS::GET_EMOJIS_REQUEST';
export const GET_EMOJIS_SUCCESS = 'EMOJIS::GET_EMOJIS_SUCCESS';
export const GET_EMOJIS_FAILURE = 'EMOJIS::GET_EMOJIS_FAILURE';

export const getEmojisRequest = () => ({
    type: GET_EMOJIS_REQUEST,
});

export const getEmojisSuccess = (articles) => ({
    type: GET_EMOJIS_SUCCESS,
    payload: articles,
});

export const getEmojisFailure = (error) => ({
    type: GET_EMOJIS_FAILURE,
    payload: error,
});

export const getEmojis = () => async (dispatch) => {
    dispatch(getEmojisRequest());
    try {
        const response = await fetch(apiUrlEmojis)
        if (!response.ok) {
          throw new Error(response.status);
        }
    const result = await response.json();
    dispatch(getEmojisSuccess(result));
    } catch (err) {
        dispatch(getEmojisFailure(err))
        console.warn(err);
    } 
};