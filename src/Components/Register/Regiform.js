import React from "react";
import { InputWithLabel } from "Components/common/Input";
import { Form, Button, Divider, Icon, Header } from "semantic-ui-react";
import styled from "styled-components";

const StyledIcon = styled(Icon)`
    margin-right: 0px !important;
    color: ${props => props.iconcolor};
`;

const Regiform = ({ btColor, iconcolor }) => (
    <Form>
        <Form.Field>
            <InputWithLabel label="자격 번호" name="certNumber" placeholder="자격 번호" />
            <InputWithLabel label="자격 종목" name="certSub" placeholder="자격 종목" />
            <InputWithLabel label="이 름" name="name" placeholder="이 름" />
            <InputWithLabel label="이메일" name="email" placeholder="이메일" type="email" />
            <InputWithLabel label="취득 일자" name="certDate" placeholder="취득 일자" />
            <Divider horizontal>
                <Header as="h4">
                    <StyledIcon name="cut" iconcolor={iconcolor} />
                </Header>
            </Divider>
            <Button basic color={btColor} style={{ marginTop: "1rem" }} size="large" fluid>등록</Button>
        </Form.Field>    
    </Form>
);

export default Regiform;
