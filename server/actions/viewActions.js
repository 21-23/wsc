import { FETCH_STORE } from 'shared/action_types/baseViewActionTypes';

export const sendState = (state) => ({
    type: FETCH_STORE,
    payload: state,
});
