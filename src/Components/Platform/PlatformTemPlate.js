import React from "react";
import { GridLabel } from "Components/common/Label";
import { Grid, Image, List, Label, Segment, Radio } from "semantic-ui-react";
import styled from "styled-components";

const StyledGrid = styled(Grid)`

@media only screen  and (max-width: 700px) and (min-width : 550px)  {
        #column {
             width : 600px !important;
             }
 }  

 @media only screen  and (max-width: 550px) {
        #column {
             width : 500px !important;
             }
 }  
`;

const PlatformTemPlate = () => (
    <>
        <Grid>
            <GridLabel>
                <Image src="/images/Mario.jpg" size="tiny" centered circular />
            </GridLabel>
            <List style={{ marginLeft: "250px", fontFamily: "Jua" }}>
                <List.Item>
                    <Label color="red" horizontal>
                    Name&nbsp; 
                    </Label>
                    <span style={{ fontSize: "19px" }}>홍길동</span>
                </List.Item>
                <List.Item>
                    <Label color="teal" horizontal>
                    E-mail
                    </Label>
                    <span style={{ fontSize: "17px" }}>Honggildong@naver.com</span>
                </List.Item>
                <List.Item>
                    <Label color="blue" horizontal>
                    Birth&nbsp; 
                    </Label>
                    <span style={{ fontSize: "19px" }}>1995.05.25</span>
                </List.Item>
            </List>
        </Grid>
        <StyledGrid columns={2} style={{ marginTop: "30px" }} stackable centered>
            <Grid.Column id="column">
                <Segment raised>
                    <Label attached="top" color="olive" size="big">보유 자격증</Label>
                    <div>
                        <Label color="yellow" size="large" style={{ marginTop: "10px" }} ribbon>
                        Q-net
                        </Label>
                        <h3>정보처리기사 <Radio toggle style={{ marginLeft: "10px" }} /></h3>
                    </div>
                    <div>
                        <Label color="brown" size="large" style={{ marginTop: "20px" }} ribbon>
                        YBM
                        </Label>
                        <h3>TOEIC 835점 <Radio toggle style={{ marginLeft: "10px" }} /></h3>
                    </div>
                </Segment>
            </Grid.Column>
            <Grid.Column id="column">
                <Segment raised>
                    <Label attached="top" color="green" size="big" style={{ textAlign: "right" }}>자격요청 횟수</Label>
                    <div>
                        <Label color="orange" size="large" style={{ marginTop: "10px" }} ribbon="right">
                        company1
                        </Label>
                        <h3 style={{ textAlign: "right" }}>1회</h3>
                    </div>
                    <div>
                        <Label color="violet" size="large" style={{ marginTop: "20px" }} ribbon="right">
                        company2
                        </Label>
                        <h3 style={{ textAlign: "right" }}>1회</h3>
                    </div>
                </Segment>
            </Grid.Column>
        </StyledGrid>
    </>
);

export default PlatformTemPlate;
