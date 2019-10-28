import React from "react";
import { InputWithLabel } from "Components/common/Input";
import { Form, Button, Divider, Icon, Header } from "semantic-ui-react";
import styled from "styled-components";

const StyledIcon = styled(Icon)`
    margin-right: 0px !important;
    color: ${props => props.iconcolor};
`;

const Toeicform = ({ btColor, iconcolor, SubmitToeic, ToeicForm, handleChange }) => {

    return (
        <Form>                                  
        <Form.Field> 
        <InputWithLabel label="토익 번호" name="toeicId" placeholder="토익 번호" value={ToeicForm.toeicId} onChange={handleChange} />
        <InputWithLabel label="토익 점수" name="totalScore" placeholder="토익 점수" value={ToeicForm.totalScore} onChange={handleChange} />
        <InputWithLabel label="이 름" name="name" placeholder="이 름" value={ToeicForm.name} onChange={handleChange} />
        <InputWithLabel label="이메일" name="email" placeholder="이메일" type="email" value={ToeicForm.email} onChange={handleChange} />
        <InputWithLabel label="취득 일자" name="passDate" placeholder="취득 일자" value={ToeicForm.passDate} onChange={handleChange} />
        <Divider horizontal>
            <Header as="h4">
                <StyledIcon name="cut" iconcolor={iconcolor} />
            </Header>
        </Divider>
        <Button basic onClick={SubmitToeic} color={btColor} style={{ marginTop: "1rem" }} size="large" fluid>등록</Button>
        </Form.Field>   
        </Form>
    );
};

const Regiform = ({ btColor, iconcolor, SubmitGisa,GisaForm, handleChange }) => {

        return(
            <Form>                                  
                    <Form.Field> 
                    <InputWithLabel label="자격 번호" name="gId" placeholder="자격 번호" value={GisaForm.gId} onChange={handleChange} />
                    <InputWithLabel label="자격 종목" name="registName" placeholder="자격 종목" value={GisaForm.registName} onChange={handleChange} />
                    <InputWithLabel label="이 름" name="name" placeholder="이 름" value={GisaForm.name} onChange={handleChange} />
                    <InputWithLabel label="이메일" name="email" placeholder="이메일" type="email" value={GisaForm.email} onChange={handleChange} />
                    <InputWithLabel label="취득 일자" name="passDate" placeholder="취득 일자" value={GisaForm.passDate} onChange={handleChange} />
                    <Divider horizontal>
                        <Header as="h4">
                            <StyledIcon name="cut" iconcolor={iconcolor} />
                        </Header>
                    </Divider>
                    <Button basic onClick={SubmitGisa} color={btColor} style={{ marginTop: "1rem" }} size="large" fluid>등록</Button>
                </Form.Field>   
            </Form>
        );
};

export {Toeicform};

export default Regiform;
