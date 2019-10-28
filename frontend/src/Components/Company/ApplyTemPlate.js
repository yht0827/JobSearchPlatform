import React from "react";
import { StepLabel } from "Components/common/Label";
import Notification from "Components/common/Notification";
import { compose, withState, withHandlers } from "recompose";
import { Button, Grid, Loader } from "semantic-ui-react";
import { FirstLabel, SecondLabel, LastLabel } from "./ApplicationLabel";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as com from "Store/modules/company";

const ApplyTemPlate = ({ btstate,GetInfos,Reqemail, questions, steps, changeNextStep, current, stepReset, bg, isLoaded, handleLoader, btcolor, subcolor, icolor }) => (
    <>   
        <StepLabel steps={steps} bg={bg} />
        <Grid style={{ fontFamily: "Jua", fontSize: 16 }}>
            { current === 1 && <FirstLabel btstate={btstate} Reqemail={Reqemail} GetInfos={GetInfos} labelcolor={btcolor} icolor={icolor} subcolor={subcolor}><Button basic color={btcolor} size="large" onClick={() => changeNextStep(current)}>다 음</Button></FirstLabel>}
            { current === 2 && <SecondLabel questions={questions} mcolor={btcolor} subcolor={subcolor}>{ isLoaded === false ? <Loader style={{ position: "absolute !important", left: "450px", top: "-300px" }} active inline>Loading</Loader> : <Grid.Row><Grid.Column textAlign="center"><Button basic color={btcolor} size="large" onClick={() => { handleLoader(false); setTimeout(() => (changeNextStep(current)), 2000); }}>제 출</Button></Grid.Column></Grid.Row>}</SecondLabel>}
            { current === 3 && <LastLabel><Button color={btcolor} size="huge" onClick={() => { stepReset(); handleLoader(true); }}>메인 으로</Button></LastLabel>}
            { current === 3 ? Notification("success", "제출 완료") : null }
        </Grid>
    </>
);

export default compose(
    connect(
        null,
        (dispatch) => ({ Coms: bindActionCreators(com,dispatch) })        
    ),
    withState("email", "ChangeEmail", ""),
    withState("btstate","ChangeBT",false),
    withHandlers({
        GetInfos: props => (event) => {
            props.ChangeEmail(event.target.value);
        },
        Reqemail:props => () => {
            if(props.email){
                props.Coms.GetPage(props.email,props.companyNm);
                props.ChangeBT(true);
            }
        },
    }),
)(ApplyTemPlate);
