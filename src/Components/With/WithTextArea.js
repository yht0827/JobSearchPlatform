import React from "react";
import { withStateHandlers } from "recompose";
import { media } from "lib/styleUtils";
import { TextArea, Label } from "semantic-ui-react";
import styled from "styled-components";

const StyledTextArea = styled(TextArea)`
        width: 100%;
        font-size: 16px;
        border: solid 0.5px;
        @media only screen  and (min-width: 850px) and (max-width: 930px) {
            width: 820px !important;
        }
        @media only screen  and (min-width: 767px) and (max-width: 850px) {
            width: 750px !important;
        }
        ${media.tablet`
            width: 660px !important;
        `}
        ${media.mobileXL`
            width: 600px !important;
        `}
        ${media.mobileL`
            width: 500px !important;
        `}
`;

const StyledLabel = styled(Label)`
        width:72px;
        font-size: 10px !important;
        margin-left:875px !important;
        @media only screen  and (min-width: 850px) and (max-width: 930px) {
            margin-left: 750px !important;
        }
        @media only screen  and (min-width: 767px) and (max-width: 850px) {
            margin-left: 700px !important;
        }
        ${media.tablet`
            margin-left: 590px !important;
        `}
        ${media.mobileXL`
            margin-left: 530px !important;
        `}
        ${media.mobileL`
            margin-left: 430px !important;
        `}
`;

const WithTextArea = withStateHandlers({
    value: "",
    valcount: 0,
},
{
    handleChange: () => (event, { value }) => {
        return {
            value,
            valcount: value.length,
        };
    },
})(
    ({ len, handleChange, value, valcount, labcolor }) => (
        <>  
            <StyledTextArea rows={5} onChange={handleChange} value={value} />
            <StyledLabel pointing color={labcolor}>{valcount} / {len}</StyledLabel>
        </>
    ),
);

export default WithTextArea;
