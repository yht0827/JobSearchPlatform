import React from "react";
import PropTypes from "prop-types";
import { JoinForm, LoginForm } from "Components/Auth";
import { FormWrapper } from "Components/common/Form";
import oc from "open-color";

const Auth = ({ action, ChangeAction,handleChange,Joinform,SubmitUser,Loginform,loginhandleChange,LoginUser}) => (
    <>
        { action === "login" && <FormWrapper title="로그인" BoxWid="500px" bg={oc.teal[7]} LogoName="PlatForm" url="/platform">
            <LoginForm LoginUser={LoginUser} loginhandleChange={loginhandleChange} Loginform={Loginform} ChangeAction={ChangeAction} />
        </FormWrapper> }
        { action === "join" && <FormWrapper title="회원가입" BoxWid="500px" bg={oc.teal[7]} LogoName="PlatForm" url="/platform">
            <JoinForm SubmitUser={SubmitUser} ChangeAction={ChangeAction} handleChange={handleChange} Joinform={Joinform} />
        </FormWrapper>}
    </>
);

Auth.prototype = {
    action: PropTypes.string.isRequired,
    changeAction: PropTypes.func.isRequired,
};

export default Auth;
