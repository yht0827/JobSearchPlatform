import React from "react";
import { Container, Header, Segment, Image, Table, Pagination } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { media, shadow } from "lib/styleUtils";

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

const GisaForm = ({ color, pgcolor,handlePage }) => {

    const gisa =useStore().getState().qnet.Gisa;
    const gisanum = useStore().getState().qnet.GisaCount;
    const pages = parseInt(gisanum/10)+1;
    const pageNum = useStore().getState().qnet.PageNum;

    return (
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
                </Table.Row>
            </Table.Header>
            <Table.Body>
               {
                gisa.map((data,index) => {
                  return(
                    <Table.Row key={index}>
                        <Table.Cell >{index+1}</Table.Cell>
                        <Table.Cell>{data.registName}</Table.Cell>
                        <Table.Cell>{data.gId}</Table.Cell>
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell>{data.email}</Table.Cell>
                        <Table.Cell>{data.passDate}</Table.Cell>
                </Table.Row>
               )
                 })
            }
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan="6" textAlign="right">
                        <StyledPage
                            bg={pgcolor}
                            boundaryRange={0}
                            defaultActivePage={pageNum}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            onPageChange={handlePage}
                            siblingRange={1}
                            totalPages={pages}
                        />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    </Wrapper>
    );
};

const TableForm = ({ color, pgcolor,handlePage }) => {

    const toeic =useStore().getState().ybm.Toeic;
    const toeicnum = useStore().getState().ybm.ToeicCount;
    const pages = parseInt(toeicnum/10)+1;
    const pageNum = useStore().getState().ybm.PageNum;

    return (
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
               {
                toeic.map((data,index) => {
                  return(
                    <Table.Row key={index}>
                        <Table.Cell >{index+1}</Table.Cell>
                        <Table.Cell>{data.TName}</Table.Cell>
                        <Table.Cell>{data.toeicId}</Table.Cell>
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell>{data.email}</Table.Cell>
                        <Table.Cell>{data.passDate}</Table.Cell>
                        <Table.Cell>{data.totalScore}</Table.Cell>
                </Table.Row>
               )
                 })
            }
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan="7" textAlign="right">
                        <StyledPage
                            bg={pgcolor}
                            boundaryRange={0}
                            activePage={pageNum}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            onPageChange={handlePage}
                            siblingRange={1}
                            totalPages={pages}
                        />
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    </Wrapper>
    );
};

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

export { MainForm, TableForm, FormWrapper, GisaForm };
