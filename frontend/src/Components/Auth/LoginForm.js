import React from "react";
import PropTypes from "prop-types";
import { SubmitButton } from "Components/common/Button";
import { InputWithLabel } from "Components/common/Input";
import { ChangeLink } from "Components/common/Link";
import { Divider, Button, Icon } from "semantic-ui-react";

const LoginForm = ({ ChangeAction,Loginform,loginhandleChange,LoginUser}) => (
    <>
        <InputWithLabel label="이메일" name="email" placeholder="이메일" value={Loginform.email} onChange={loginhandleChange}/>
        <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={Loginform.password} onChange={loginhandleChange} />
        <SubmitButton onClick={LoginUser}>로그인</SubmitButton>
        <ChangeLink ChangeAction={ChangeAction} action="join">회원가입</ChangeLink>
        <Divider horizontal>Or</Divider>
        <Button color="black" size="large" fluid>
            <Icon name="github" /> Start with Github
        </Button>
        <br />
        <Button color="google plus" size="large" fluid>
            <Icon name="google" /> Start with Google
        </Button>
    </>
);

LoginForm.prototype = {
    changeAction: PropTypes.func.isRequired,
};

export default LoginForm;
