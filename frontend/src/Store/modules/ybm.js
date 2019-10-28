import { createAction,handleActions } from "redux-actions";
import produce from "immer";
import Notification from "Components/common/Notification";
import { getTo, getAllToeicCount, RegToeic } from "lib/api";

// actions types

const GET_TOEIC = "ybm/GET_TOEIC";
const GET_TOEIC_ERROR = "ybm/GET_TOEIC_ERROR";
const GET_TOEIC_COUNT= "ybm/GET_TOEIC_COUNT";
const GET_TOEIC_COUNT_ERROR= "ybm/GET_TOEIC_COUNT_ERROR";
const TOEIC_PAGE= "ybm/TOEIC_PAGE";
const TOEIC_REGI= "ybm/TOEIC_REGI";
const REGI_TOEIC= "ybm/REGI_TOEIC";
const REGI_ERROR= "ybm/REGI_ERROR";
const CLEAR = "ybm/CLEAR";

// action Operations 

export const Toeic = createAction(GET_TOEIC);
export const ToeicError = createAction(GET_TOEIC_ERROR);
export const ToeicCount = createAction(GET_TOEIC_COUNT);
export const ToeicCountError = createAction(GET_TOEIC_COUNT_ERROR);
export const ToeicPage = createAction(TOEIC_PAGE);
export const TOEICRegi = createAction(TOEIC_REGI);
export const RegiToeic = createAction(REGI_TOEIC);
export const RegiError = createAction(REGI_ERROR);
export const Clear = createAction(CLEAR);

// function

export const getToeic = (name,skipnum) => dispatch => {
        getTo(name,skipnum).then(
                (response) => { 
                    dispatch(Toeic(response));
            }).catch(
                (error) => {
                    dispatch(ToeicError());
                }
            );
};

export const GetCount = (search) => dispatch => {
    getAllToeicCount(search).then(
        (response) => { 
        dispatch(ToeicCount(response.data.length));
    }).catch(
        (error) => {
            dispatch(ToeicCountError());
        }
    );
};

export const GetPage = (page) => dispatch => {
        dispatch(ToeicPage(page));
};

export const RegiTo = (data) => dispatch => {
    RegToeic(data).then(
        (response)=>{
            dispatch(RegiToeic());
        }
    ).catch(
        (error) => {
            dispatch(RegiError());
        }
    );
};

// initial state

const initialState = {
    Toeic: [{},{},{},{},{},{},{},{},{},{}],
    ToeicCount: 0,
    PageNum: 1,
    ToeicForm:{
        TName: '',
        toeicId :'',
        totalScore:'',
        passDate:'',
        email:'',
        name:''
    }
};

// reducer

export default handleActions({
    [GET_TOEIC]: (state, action) => {
        return produce(state, draft => {
            draft.Toeic=[];
            const data = action.payload.data;
                data.map(data => {
              return draft.Toeic.push({
                    TName:"TOEIC",
                    toeicId:data.toeicId, 
                    name:data.certificate.name,
                    email:data.certificate.owner.substring(36),
                    passDate:data.certificate.passDate.substring(2,10),
                    totalScore:data.totalScore
                });
            });
            if(10-data.length){
                for(let i =0;i<10-data.length;i++){
                    draft.Toeic.push({});
                }
            }
        }); 
    },
    [GET_TOEIC_ERROR]: (state, action) => {
        return produce(state, draft => {
            draft.Toeic=[{},{},{},{},{},{},{},{},{},{}];
            draft.PageNum=1;
    });
    },

    [GET_TOEIC_COUNT] : (state,action) => {
        return produce(state, draft => {
               draft.ToeicCount=action.payload;
        });
    },
    [GET_TOEIC_COUNT_ERROR] : (state,action) => {
        return produce(state, draft => {
            draft.ToeicCount=0;
        });
    },
    [TOEIC_PAGE] : (state,action) => {
        return produce(state,draft => {
            draft.PageNum=action.payload;
        });
    },
    [TOEIC_REGI]: (state,action) => {
        const { name,value} = action.payload;
        return produce(state, draft => {
            draft.ToeicForm[name]=value;
        });
    },
    [REGI_TOEIC]: (state,action) => {
        return produce(state, draft => {
            draft.ToeicForm={
                toeicId :'',
                totalScore:'',
                passDate:'',
                email:'',
                name:''
            };
            Notification("success", "등록 완료");
        }); 
    },
    [REGI_ERROR]: (state,action) => {
        return produce(state, draft => {
            draft.ToeicForm={
                toeicId :'',
                totalScore:'',
                passDate:'',
                email:'',
                name:''
            };
            Notification("error", "등록 실패");
        }); 
    }, 
    [CLEAR]: (state,action) => {
        return produce(state, draft => {
                draft.ToeicCount=0;
                draft.PageNum=1;
                draft.Toeic=[{},{},{},{},{},{},{},{},{},{}];
                draft.ToeicForm={
                    toeicId :'',
                    totalScore:'',
                    passDate:'',
                    email:'',
                    name:''
                };    
        }); 
    }, 
},initialState);
