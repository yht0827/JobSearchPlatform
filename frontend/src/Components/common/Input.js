import React from "react";
import { Input } from "semantic-ui-react";
import { WithDatePicker } from "Components/With";
import styled from "styled-components";
import oc from "open-color";

const StyledBI = styled(Input)`
    margin-top: 40px;
    width: 40vh;
    button {
        width: 5vh;
        .icon {
            font-size: 1.4em;  
        }
    }
`;

const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: ${oc.gray[6]};
    margin-bottom: 0.25rem;
`;

const Inputs = styled.input`
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    ::placeholder {
        color: ${oc.gray[3]};
    }
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.

const InputWithLabel = ({ label, Date, wid, ...rest }) => (
    <Wrapper>
        <Label>{label}</Label>
        { Date ? <WithDatePicker wid={wid} /> : <Inputs { ...rest } /> }
    </Wrapper>
);

const ButtonWithInput = ({ btcolor }) => <StyledBI
    action={{
        color: btcolor, 
        icon: "reply", 
    }} 
    placeholder="Request"
    size="small"
/>;

export { ButtonWithInput, InputWithLabel };
