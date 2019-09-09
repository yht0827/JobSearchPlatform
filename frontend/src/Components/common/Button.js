import React from "react";
import styled from "styled-components";
import oc from "open-color";
import PropTypes from "prop-types";
import { shadow } from "lib/styleUtils";

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${oc.teal[6]};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: default;
    user-select: none;
    transition: .2s all;

    &:hover {
        background: ${oc.teal[5]};
        ${shadow(0)}
    }

    &:active {
        background: ${oc.teal[7]};
    }

`;

const SubmitButton = ({ children, onClick }) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

SubmitButton.prototype = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export { SubmitButton };
