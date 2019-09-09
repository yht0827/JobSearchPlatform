import React from "react";
import { GridLabel } from "Components/common/Label";
import { ButtonWithInput } from "Components/common/Input";
import { WithDatePicker, WithTextArea } from "Components/With";
import { Dropdown, Label, Input, Message } from "semantic-ui-react";
import styled from "styled-components";
import { score, graduate } from "lib/Data";

const FirstLabel = ({ children, labelcolor, icolor, subcolor }) => (
    <>
        <GridLabel>
            <Label size="big" basic color={labelcolor} pointing="right">이력 요청</Label>
            <ButtonWithInput btcolor={subcolor} />
        </GridLabel>
        <GridLabel>
            <Label size="big" basic color={labelcolor} pointing="right">최종 학력</Label>
            <Dropdown
                selection
                options={graduate}
                placeholder="선택"
                style={{ width: "40vh" }}
            />
        </GridLabel>   
        <GridLabel>
            <Label size="big" basic color={labelcolor} pointing="right">전 공</Label>
            <Input placeholder="전공 입력" style={{ width: "130px" }} />
            <Label size="big" basic color={subcolor} pointing="right" style={{ marginLeft: "40px" }}>복수 전공</Label>
            <Input placeholder="복수전공 입력" style={{ width: "130px" }} />
        </GridLabel>
        <GridLabel>
            <Label size="big" basic color={labelcolor} pointing="right">학 점</Label>
            <Input placeholder="학점 입력" style={{ width: "17vh", marginRight: "4vh" }} /> / &nbsp; 
            <Dropdown selection options={score} placeholder="선택" style={{ minWidth: "unset", width: "16vh", marginLeft: "4vh" }} />
        </GridLabel>
        <GridLabel>
            <Label size="big" basic color={labelcolor} pointing="right">입학 날짜</Label>
            <WithDatePicker wid="40vh" icolor={icolor} />
        </GridLabel>
        <GridLabel>
            <Label size="big" basic color={labelcolor} pointing="right">졸업 날짜</Label>
            <WithDatePicker wid="40vh" icolor={icolor} />
        </GridLabel>
        <GridLabel>
            { children }
        </GridLabel>
    </>
);

const StyledMessage = styled(Message)`
@media only screen  and (max-width: 580px) {
        font-size: 16px !important;
}
`;

const SecondLabel = ({ questions, children, mcolor, subcolor }) => (
    <>  
        <GridLabel>
            <StyledMessage color={mcolor} size="large" style={{ marginTop: "20px", fontFamily: "Jua" }}>{questions.q1}</StyledMessage>
            <WithTextArea labcolor={mcolor} len="600" />
        </GridLabel>
        <GridLabel>
            <StyledMessage color={subcolor} size="large" style={{ fontFamily: "Jua" }}>{questions.q2}</StyledMessage>
            <WithTextArea labcolor={mcolor} len="1000" />
        </GridLabel>
        { children }
    </>
);

const LastLabel = ({ children }) => (
    <>
        <GridLabel>
            <Message
                size="big"
                header="제출 완료!"
                content="좋은 결과를 있기를 응원 합니다."
                style={{ backgroundColor: "white", marginTop: "100px" }}
            />
        </GridLabel>
        <GridLabel>
            { children }
        </GridLabel>
    </>
);

export { FirstLabel, SecondLabel, LastLabel };
