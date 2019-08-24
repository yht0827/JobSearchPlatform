import React from "react";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Section = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default Section;
