import { createAction,handleActions } from "redux-actions";
import produce from "immer";
import Notification from "Components/common/Notification";
import { GETReq,Countup } from "lib/api";

// actions types

const GET_PAGE= "company/GET_PAGE";

// action creators

export const GETPage = createAction(GET_PAGE);

// action Operations 

export const GetPage = (data,company) => dispatch => {
    
    GETReq(data).then(
        (response) => { 
        dispatch(GETPage(response));
        Countup(company,data);
    }).catch(
        (error) => {
    }
    );
};

// initial state

const initialState = {
};

// reducer

export default handleActions({
    [GET_PAGE]: (state,action) => {
        return produce(state, draft => {
            Notification("success", "자격증 요청 성공");
        }); 
    },
},initialState);
