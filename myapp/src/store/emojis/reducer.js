import { FETCH_STATUSES } from "../../components/utils/constants";
import { GET_EMOJIS_REQUEST, GET_EMOJIS_FAILURE, GET_EMOJIS_SUCCESS } from "./actions";

const initialState = {
  data: [],
  error: null,
  statuses: FETCH_STATUSES.IDLE,
};

export const emojisReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMOJIS_REQUEST: {
            return {
                ...state,
                error: null,
                status: FETCH_STATUSES.REQUEST,
            };
        }
        case GET_EMOJIS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                status: FETCH_STATUSES.SUCCESS,
            };
        }
        case GET_EMOJIS_FAILURE: {
            return {
                ...state,
                status: FETCH_STATUSES.FAILURE,
                error: action.payload,
            };
        }
        default:
            return state;
    }
};