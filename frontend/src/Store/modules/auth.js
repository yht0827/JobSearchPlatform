import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import Notification from "Components/common/Notification";
import { RegUser,LoginUser,GETInfo,GETGisa, GETToeic } from "lib/api";

// actions types

const SET_HEADER_VISIBILITY = "auth/SET_HEADER_VISIBILITY";
const USER_REGI = "auth/USER_REGI";
const REGI_USER = "auth/REGI_USER";
const REGI_ERROR = "auth/REGI_ERROR";
const CLEAR = "auth/CLEAR";
const LOGIN_USER = "auth/LOGIN_USER";
const LOGIN_ERROR ="auth/LOGIN_ERROR";
const USER_LOGIN="auth/USER_LOGIN";
const SET_LOG="auth/SET_LOG";
const LOGOUT="auth/LOGOUT";
const PROFILE_ERROR= "auth/PROFILE_ERROR";
const PROFILE="auth/PROFILE";
const TOEIC_GET="auth/TOEIC_GET";
const GISA_GET="auth/GISA_GET";
const CLEAR_PROFILE="auth/CLEAR_PROFILE";

// action creators

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY);
export const UserRegi = createAction(USER_REGI);
export const RegiUs = createAction(REGI_USER);
export const RegiError = createAction(REGI_ERROR);
export const Clear = createAction(CLEAR);
export const UserLog = createAction(USER_LOGIN);
export const LoginUs = createAction(LOGIN_USER);
export const LoginError = createAction(LOGIN_ERROR);
export const SetLog = createAction(SET_LOG);
export const Logout = createAction(LOGOUT);
export const ProfileError = createAction(PROFILE_ERROR);
export const Profile = createAction(PROFILE);
export const GisaGet = createAction(GISA_GET);
export const ToeicGet = createAction(TOEIC_GET);
export const ClearProfile = createAction(CLEAR_PROFILE);

// action Operations 

export const changeHeader = (event) => dispatch => {
    dispatch(setHeaderVisibility(event));
};

export const RegiUser = (data,changeAction) => dispatch => {

    RegUser(data).then(
        (response)=>{
            dispatch(RegiUs());
            changeAction("login");
        }
    ).catch(
        (error)=>{
            dispatch(RegiError());
        }
    );
};

export const LogUser = (data,history) => dispatch => {

    LoginUser(data).then(
        (response)=>{
            dispatch(LoginUs(response.data.email));
            history.push("/platform");
        }
    ).catch(
        (error)=>{
            dispatch(LoginError());
        }
    );
};


export const GetProfile = (id) => dispatch => {

    GETInfo(id).then(
        (response)=>{
            dispatch(Profile(response));
        }).catch(
            (error)=>{
                dispatch(ProfileError());
            }
    );
};

export const Getgisa = (id) => dispatch => {

    GETGisa(id).then(
        (response)=>{
            dispatch(GisaGet(response.data));
        }).catch(
            (error)=>{
                dispatch(ProfileError());
            }
    );
};

export const Gettoeic = (id) => dispatch => {

    GETToeic(id).then(
        (response)=>{
            dispatch(ToeicGet(response));
        }).catch(
            (error)=>{
                dispatch(ProfileError());
            }
    );
};

// initial state

const initialState = {
        visible: true,
        isLogged: '',
        Joinform:{
            email:'',
            password:'',
            password2:'',
            name:'',
            birth:''
        },
        Loginform:{
            email:'',
            password:''
        },
        Profileform:{
            email:'',
            name:'',
            birth:'',
            gisa:'',
            Toeic:'',
            Company1:0,
            Company2:0,
        }
};

// reducer

export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => {
        return produce(state, draft => {
            draft.visible = action.payload;
        }); 
    },
    [USER_REGI]: (state,action) => {
        const { name,value} = action.payload;
        return produce(state,draft => {
            draft.Joinform[name]=value;
        });
    },
    [USER_LOGIN]: (state,action) => {
        const { name,value} = action.payload;
        return produce(state,draft => {
            draft.Loginform[name]=value;
        });
    },
    [REGI_USER]: (state,action) => {
        return produce(state, draft => {
            draft.Joinform={
                email:'',
                password:'',
                password2:'',
                name:'',
                birth:''
            };
            Notification("success", "회원가입 성공");
        }); 
    }, 
    [REGI_ERROR]: (state,action) => {
        return produce(state, draft => {
            draft.Joinform={
                email:'',
                password:'',
                password2:'',
                name:'',
                birth:''
            };
            Notification("error", "회원가입 실패");
        }); 
    }, 
    [CLEAR]: (state,action) => {
        return produce(state, draft => {
                draft.Joinform={
                    toeicId :'',
                    totalScore:'',
                    passDate:'',
                    email:'',
                    name:'',
                };
                draft.Loginform={
                    email:'',
                    password:'', 
                };   
        }); 
    },
    [LOGIN_USER]: (state,action) => {
        return produce(state, draft => {
            localStorage.setItem("id", action.payload);
            draft.isLogged=action.payload;
            Notification("info", "로그인 성공");
        }); 
    },
    [LOGIN_ERROR]: (state,action) => {
        return produce(state, draft => {
                draft.Loginform={
                    email:'',
                    password:''  
                };   
            Notification("error", "로그인 실패");
        }); 
    },
    [SET_LOG]: (state,action) => {
        return produce(state, draft => {
            draft.isLogged=action.payload;
        }); 
    },
    [LOGOUT]:  (state,action) => {
        return produce(state, draft => {
            localStorage.removeItem("id");
            draft.isLogged= '';
            Notification("info", "로그아웃");
        }); 
    },
    [PROFILE_ERROR]: (state,action) => {
        return produce(state, draft => {
        }); 
    },
    [PROFILE]: (state,action) => {
        
        const profile = action.payload.data[0];
        let com1=0,com2=0;
        
        // eslint-disable-next-line 
        profile.comReq.map(data => {
            if(data === "Company1"){
                com1+=1;
            }else if(data === "Company2"){
                com2+=1;
            }
        });

        return produce(state, draft => {
            draft.Profileform.email=profile.email;
            draft.Profileform.name=profile.name;
            draft.Profileform.birth=profile.birth.substring(0,10);
            draft.Profileform.Company1=com1;
            draft.Profileform.Company2=com2;
        }); 
    },
    [TOEIC_GET]: (state,action) => {
        const { data } =action.payload;
        return produce(state, draft => {
            draft.Profileform.Toeic=data[0].totalScore;
        }); 
    },
    [GISA_GET]: (state,action) => {
        return produce(state, draft => {
            draft.Profileform.gisa=action.payload[0].registName;
        }); 
    },
    [CLEAR_PROFILE] : (state,action) => {
        return produce(state, draft => {

            draft.Profileform = {
                email:'',
                name:'',
                birth:'',
                gisa:'',
                Toeic:'',
                Company1:0,
                Company2:0,
            }
        }); 
    },
},initialState);
