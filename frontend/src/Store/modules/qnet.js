import { createAction,handleActions } from "redux-actions";
import produce from "immer";
import Notification from "Components/common/Notification";
import { getGi, getAllGisaCount, RegGi } from "lib/api";

// actions types

const GET_GISA = "qnet/GET_GISA";
const GET_GISA_ERROR = "qnet/GET_GISA_ERROR";
const GET_GISA_COUNT= "qnet/GET_GISA_COUNT";
const GET_GISA_COUNT_ERROR= "qnet/GET_GISA_COUNT_ERROR";
const GISA_PAGE= "qnet/GISA_PAGE";
const GISA_REGI= "qnet/GISA_REGI";
const REGI_GISA= "qnet/REGI_GISA";
const REGI_ERROR= "qnet/REGI_ERROR";
const CLEAR = "qnet/CLEAR";

// action creators

export const GISA = createAction(GET_GISA);
export const GISAError = createAction(GET_GISA_ERROR);
export const GISACount = createAction(GET_GISA_COUNT);
export const GISACountError = createAction(GET_GISA_COUNT_ERROR);
export const GISAPage = createAction(GISA_PAGE);
export const GISARegi = createAction(GISA_REGI);
export const RegiGi = createAction(REGI_GISA);
export const RegiError = createAction(REGI_ERROR);
export const Clear = createAction(CLEAR);

// action Operations 

export const getGisa = (name,skipnum) => dispatch => {
    
    getGi(name,skipnum).then(
            (response) => { 
                dispatch(GISA(response));
        }).catch(
            (error) => {
                dispatch(GISAError());
            }
        );
};

export const GetCount = (search) => dispatch => {
getAllGisaCount(search).then(
    (response) => { 
    dispatch(GISACount(response.data.length));
}).catch(
    (error) => {
        dispatch(GISACountError());
    }
);
};

export const GetPage = (page) => dispatch => {
    dispatch(GISAPage(page));
};

export const RegiGisa = (data) => dispatch => {
        RegGi(data).then(
            (response)=>{
                dispatch(RegiGi());
            }
        ).catch(
            (error) => {
                dispatch(RegiError());
            }
        );
};

// initial state

const initialState = {
    Gisa: [{},{},{},{},{},{},{},{},{},{}],
    GisaCount: 0,
    PageNum: 1,
    GisaForm:{
        registName:'', 
        gId:'',
        name:'',
        email:'',
        passDate:''
    }
};

// reducer

export default handleActions({
    [GET_GISA]: (state, action) => {
        return produce(state, draft => {
            draft.Gisa=[];
            const data = action.payload.data;
                data.map(data => {
              return draft.Gisa.push({
                registName:data.registName,
                    gId:data.gId, 
                    name:data.certificate.name,
                    email:data.certificate.owner.substring(36),
                    passDate:data.certificate.passDate.substring(2,10),
                });
            });

            if(10-data.length){
                for(let i =0;i<10-data.length;i++){
                    draft.Gisa.push({});
                }
            }
        }); 
    },
    [GET_GISA_ERROR]: (state, action) => {
        return produce(state, draft => {
            draft.Gisa=[{},{},{},{},{},{},{},{},{},{}];
            draft.PageNum=1;
        }); 
    },
    [GET_GISA_COUNT]: (state, action) => {
        return produce(state, draft => {
            draft.GisaCount=action.payload;
        }); 
    },
    [GET_GISA_COUNT_ERROR] : (state, action) => {
        return produce(state, draft => {
            draft.GisaCount=0;
        }); 
    },
    [GISA_PAGE]: (state, action) => {
        return produce(state, draft => {
            draft.PageNum=action.payload;
        }); 
    },
    [GISA_REGI]: (state,action) => {
        const { name,value} = action.payload;
        return produce(state, draft => {
            draft.GisaForm[name]=value;
        });
    },
    [REGI_GISA]: (state,action) => {
        return produce(state, draft => {
            draft.GisaForm={
                registName:'', 
                gId:'',
                name:'',
                email:'',
                passDate:''
            };
            Notification("success", "등록 완료");
        }); 
    },
    [REGI_ERROR]: (state,action) => {
        return produce(state, draft => {
            draft.GisaForm={
                registName:'', 
                gId:'',
                name:'',
                email:'',
                passDate:''
            };
            Notification("error", "등록 실패");
        }); 
    }, 
    [CLEAR]: (state,action) => {
        return produce(state, draft => {
                draft.GisaCount=0;
                draft.PageNum=1;
                draft.Gisa=[{},{},{},{},{},{},{},{},{},{}];
                draft.GisaForm={
                    registName:'', 
                    gId:'',
                    name:'',
                    email:'',
                    passDate:''
                };    
        }); 
    }, 
},initialState);
