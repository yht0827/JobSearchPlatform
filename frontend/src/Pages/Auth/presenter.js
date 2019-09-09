import React from "react";
import PropTypes from "prop-types";
import { JoinForm, LoginForm } from "Components/Auth";
import { FormWrapper } from "Components/common/Form";
import oc from "open-color";

const Auth = ({ action, changeAction }) => (
    <>
        { action === "login" && <FormWrapper title="로그인" BoxWid="500px" bg={oc.teal[7]} LogoName="PlatForm" url="/platform">
            <LoginForm changeAction={changeAction} />
        </FormWrapper> }
        { action === "join" && <FormWrapper title="회원가입" BoxWid="500px" bg={oc.teal[7]} LogoName="PlatForm" url="/platform">
            <JoinForm changeAction={changeAction} />
        </FormWrapper>}
    </>
);

Auth.prototype = {
    action: PropTypes.string.isRequired,
    changeAction: PropTypes.func.isRequired,
};

export default Auth;
