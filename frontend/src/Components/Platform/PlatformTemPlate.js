import React from "react";
import { GridLabel } from "Components/common/Label";
import { Grid, Image, List, Label, Segment, Radio } from "semantic-ui-react";
import { compose, lifecycle } from "recompose";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import * as auth from "Store/modules/auth";

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

const PlatformTemPlate = ({Profileform}) => {

    return(
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
                    <span style={{ fontSize: "19px" }}>{Profileform.name}</span>
                </List.Item>
                <List.Item>
                    <Label color="teal" horizontal>
                    E-mail
                    </Label>
                    <span style={{ fontSize: "17px" }}>{Profileform.email}</span>
                </List.Item>
                <List.Item>
                    <Label color="blue" horizontal>
                    Birth&nbsp; 
                    </Label>
                    <span style={{ fontSize: "19px" }}>{Profileform.birth}</span>
                </List.Item>
            </List>
        </Grid>
        <StyledGrid columns={2} style={{ marginTop: "30px" }} stackable centered>
            <Grid.Column id="column">
                <Segment raised style={{minHeight:"245px"}}>
                    <Label attached="top" color="olive" size="big">보유 자격증</Label>
                    {Profileform.gisa?
                    <div>
                        <Label color="yellow" size="large" style={{ marginTop: "10px" }} ribbon>
                        Q-net
                        </Label>
                        <h3>{Profileform.gisa} <Radio toggle style={{ marginLeft: "10px" }} /></h3>
                    </div>:null
                    }
                    {Profileform.Toeic?<div>
                        <Label color="brown" size="large" style={{ marginTop: "20px" }} ribbon>
                        YBM
                        </Label>
                        <h3>TOEIC {Profileform.Toeic} <Radio toggle style={{ marginLeft: "10px" }} /></h3>
                    </div>:null
                    }
                </Segment>
            </Grid.Column>
            <Grid.Column id="column">
                <Segment raised>
                    <Label attached="top" color="green" size="big" style={{ textAlign: "right" }}>자격요청 횟수</Label>
                    <div>
                        <Label color="orange" size="large" style={{ marginTop: "10px" }} ribbon="right">
                        company1
                        </Label>
                        <h3 style={{ textAlign: "right" }}>{Profileform.Company1}회</h3>
                    </div>
                    <div>
                        <Label color="violet" size="large" style={{ marginTop: "20px" }} ribbon="right">
                        company2
                        </Label>
                        <h3 style={{ textAlign: "right" }}>{Profileform.Company2}회</h3>
                    </div>
                </Segment>
            </Grid.Column>
        </StyledGrid>
        </>
    );
};

export default compose(
    connect((state) => ({ 
        Profileform: state.auth.Profileform,
    }),
    dispatch => ({ Auths: bindActionCreators(auth,dispatch)})        
    ),
    lifecycle({
        componentDidMount() {
            const id = localStorage.getItem('id');
            this.props.Auths.GetProfile(id);
            this.props.Auths.Getgisa(id);
            this.props.Auths.Gettoeic(id);    
        },
    }),
)(PlatformTemPlate);
