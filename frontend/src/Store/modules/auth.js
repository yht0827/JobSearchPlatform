import { createAction, handleActions } from "redux-actions";
import { Map } from "immutable";
import "react-notifications/lib/notifications.css";
// import { pender } from "redux-pender";

// actions types

const SET_HEADER_VISIBILITY = "auth/SET_HEADER_VISIBILITY";

// action creators

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY);

// initial sate

const initialState = Map({
    header: Map({
        visible: true,
    }),
});

// reducer

export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => {
        return state.setIn(["header", "visible"], action.payload);
    },
}, initialState);
