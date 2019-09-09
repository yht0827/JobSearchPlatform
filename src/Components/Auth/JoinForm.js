import React from "react";
import PropTypes from "prop-types";
import { SubmitButton } from "Components/common/Button";
import { InputWithLabel } from "Components/common/Input";
import { ChangeLink } from "Components/common/Link";

const JoinForm = ({ changeAction }) => (
    <>
        <InputWithLabel label="이메일" name="email" placeholder="이메일" />
        <InputWithLabel label="이름" name="name" placeholder="이름" />
        <InputWithLabel label="생일" Date="Date" wid="445px" />
        <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" />
        <InputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password" />
        <SubmitButton>회원가입</SubmitButton>
        <ChangeLink changeAction={changeAction} action="login">로그인</ChangeLink>
    </>
);

JoinForm.prototype = {
    changeAction: PropTypes.func.isRequired,
};

export default JoinForm;
