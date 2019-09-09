import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Section = ({ children }) => (
    <Container>
        {children}
    </Container>
);

Section.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default Section;
