import React from "react";
import PropTypes from "prop-types";
import { SubmitButton } from "Components/common/Button";
import { InputWithLabel } from "Components/common/Input";
import { ChangeLink } from "Components/common/Link";

const JoinForm = ({ ChangeAction,handleChange, Joinform,SubmitUser }) => (
    <>
        <InputWithLabel label="이메일" name="email" placeholder="이메일" value={Joinform.email} onChange={handleChange}/>
        <InputWithLabel label="이름" name="name" placeholder="이름" value={Joinform.name} onChange={handleChange} />
        <InputWithLabel label="생일" name="birth" placeholder="생일" value={Joinform.birth} onChange={handleChange} />
        <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" value={Joinform.password} onChange={handleChange} />
        <InputWithLabel label="비밀번호 확인" name="password2" placeholder="비밀번호 확인" type="password" value={Joinform.password2} onChange={handleChange} />
        <SubmitButton onClick={SubmitUser}>회원가입</SubmitButton>
        <ChangeLink ChangeAction={ChangeAction} action="login">로그인</ChangeLink>
    </>
);

JoinForm.prototype = {
    ChangeAction: PropTypes.func.isRequired,
};

export default JoinForm;
