import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { shadow, media } from "lib/styleUtils";

const Positioner = styled.div`
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0px;
        width: 100%;
        ${shadow(1)}
`;

const Background = styled.div`
    background: ${props => props.bg};
    display: flex;
    justify-content: center;
    height: auto;
`;

const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

const Title = styled(Link)`
    font-size: 1.4rem;
    letter-spacing: 2px;
    user-select: none;
    color: ${props => props.fg};
    font-family: 'Rajdhani';
    &:hover{
        color: ${props => props.fg};
    }
`;

const Spacer = styled.div`
    flex-grow: 1;
`;

const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${props => props.gr1}, ${props => props.gr2});
`;

const Header = ({ children, title, link, bg, fg, onClick, gr1, gr2 }) => {
    return (
        <Positioner>
            <Background bg={bg}>
                <HeaderContents>
                    <Title onClick={onClick} to={link} fg={fg}>{title}</Title>
                    <Spacer />
                    {children}
                </HeaderContents>
            </Background>
            <GradientBorder gr1={gr1} gr2={gr2} />
        </Positioner>
    );
};

Header.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired, 
    fg: PropTypes.string.isRequired,  
    onClick: PropTypes.func.isRequired,
    gr1: PropTypes.string.isRequired, 
    gr2: PropTypes.string.isRequired, 
};

export default Header;
