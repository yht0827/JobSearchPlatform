import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default withRouter(() => (
    <>
        <List>
            <Item>
                <SLink to="/company1">삼성</SLink>
            </Item>
            <Item>
                <SLink to="/company2">LG</SLink>
            </Item>
            <Item>
                <SLink to="/platform">플랫폼</SLink>
            </Item>    
            <Item>
                <SLink to="/ybm">Ybm</SLink>
            </Item>
            <Item>
                <SLink to="/qnet">Qnet</SLink>
            </Item>      
        </List>
    </>
));
