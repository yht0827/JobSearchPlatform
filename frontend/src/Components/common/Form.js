import React from "react";
import { Container, Header, Segment, Image, Table, Pagination } from "semantic-ui-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media, shadow } from "lib/styleUtils";

// map으로 구현 

const Wrapper = styled.div`
    width:800px;

    ${media.tablet`
        width:50%;
    `}
`;
const StyledPage = styled(Pagination)`
    .active {
            background-color: ${props => props.bg} !important;
    }
`;

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
    width: ${props => props.BoxWid && props.BoxWid};
    height: ${props => props.BoxHei && props.BoxHei};
    ${shadow(2)}
`;

const LogoWrapper = styled.div`
    background: ${props => props.bg};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled(Link)`
    cursor: default;
    color: white;
    font-family: "Rajdhani";
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
    
    &:hover{
        color:white;
    }
`;

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: #343a40;
    margin-bottom: 1rem;
`;

const FormWrapper = ({ title, bg, children, BoxWid, BoxHei, LogoName, url }) => (
    <Positioner>
        <ShadowedBox BoxHei={BoxHei} BoxWid={BoxWid}>
            <LogoWrapper bg={bg}>
                { url ? <Logo to={url}>{LogoName}</Logo> : <Logo to="#">{LogoName}</Logo> }  
            </LogoWrapper>
            <Contents>
                {title && <Title>{title}</Title>}
                {children}
            </Contents>
        </ShadowedBox>
    </Positioner>
);

const MainForm = ({ color, pageDesc }) => (
    <Segment circular color={color}>
        <Container text>
            <Header as="h2" color={color} textAlign="center">
                <Image circular src={"images/" + pageDesc.img} />
                의 비전</Header>
            <p>
                {pageDesc.content}
            </p>
            <br />
        </Container>
    </Segment>
);

const TableForm = ({ color, pgcolor }) => (
    <Wrapper>
        <Table color={color}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={1}></Table.HeaderCell>
                    <Table.HeaderCell width={1}>자격 명</Table.HeaderCell>
                    <Table.HeaderCell width={1}>자격번호</Table.HeaderCell>
                    <Table.HeaderCell width={1}>이름</Table.HeaderCell>
                    <Table.HeaderCell width={2}>이메일</Table.HeaderCell>
                    <Table.HeaderCell width={2}>취득 일자</Table.HeaderCell>
                    <Table.HeaderCell width={1}>점수</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>TOEIC</Table.Cell>
                    <Table.Cell>19-112</Table.Cell>
                    <Table.Cell>홍길동</Table.Cell>
                    <Table.Cell>hongildong@naver.com</Table.Cell>
                    <Table.Cell>19.01.01</Table.Cell>
                    <Table.Cell>800</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>2</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>4</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>6</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>7</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>8</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>9</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>10</Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                    <Table.Cell></Table.Cell>
                </Table.Row>
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan="7" textAlign="right">
                        <StyledPage
                            bg={pgcolor}
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={10}
                        />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    </Wrapper>
);

MainForm.prototype = {
    color: PropTypes.string.isRequired, 
    pageDesc: PropTypes.object.isRequired,
};

TableForm.prototype = {
    color: PropTypes.string.isRequired,
    pgcolor: PropTypes.string.isRequired,
};

FormWrapper.prototype = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    title: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    BoxWid: PropTypes.string.isRequired,
    BoxHei: PropTypes.string.isRequired,
    LogoName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export { MainForm, TableForm, FormWrapper };
