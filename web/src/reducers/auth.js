import {
    API_SIGNIN_SUCCESS,
    API_SIGNIN_ERROR,
    USER_CREATE_ERROR,
    USER_CREATED,
    CREATE_USER_LOADING
} from '../actions/auth';

import store from 'store';

const initialState = {
    tryCount: 0,
    success: false,
    me: store.get('me') || {},
    createUser: {}
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case API_SIGNIN_SUCCESS:
            return Object.assign({}, state, {success: true, tryCount: state.tryCount + 1, user: action.payload.user});
        case API_SIGNIN_ERROR:
            return Object.assign({}, state, {success: false, tryCount: state.tryCount + 1, user: {}});
        case USER_CREATE_ERROR:
            return {...state, createUser: {error: true, success: false}};
        case USER_CREATED:
            return {...state, createUser: {error: false, success: true}};
        case CREATE_USER_LOADING:
            return {...state, createUser: {error: false, success: false}};
        default:
            return state;
    }
}