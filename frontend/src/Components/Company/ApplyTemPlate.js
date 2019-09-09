import React from "react";
import { StepLabel } from "Components/common/Label";
import Notification from "Components/common/Notification";
import { Button, Grid, Loader } from "semantic-ui-react";
import { FirstLabel, SecondLabel, LastLabel } from "./ApplicationLabel";

const ApplyTemPlate = ({ questions, steps, changeNextStep, current, stepReset, bg, isLoaded, handleLoader, btcolor, subcolor, icolor }) => (
    <>   
        <StepLabel steps={steps} bg={bg} />
        <Grid style={{ fontFamily: "Jua", fontSize: 16 }}>
            { current === 1 && <FirstLabel labelcolor={btcolor} icolor={icolor} subcolor={subcolor}><Button basic color={btcolor} size="large" onClick={() => changeNextStep(current)}>다 음</Button></FirstLabel>}
            { current === 2 && <SecondLabel questions={questions} mcolor={btcolor} subcolor={subcolor}>{ isLoaded === false ? <Loader style={{ position: "absolute !important", left: "450px", top: "-300px" }} active inline>Loading</Loader> : <Grid.Row><Grid.Column textAlign="center"><Button basic color={btcolor} size="large" onClick={() => { handleLoader(false); setTimeout(() => (changeNextStep(current)), 2000); }}>제 출</Button></Grid.Column></Grid.Row>}</SecondLabel>}
            { current === 3 && <LastLabel><Button color={btcolor} size="huge" onClick={() => { stepReset(); handleLoader(true); }}>메인 으로</Button></LastLabel>}
            { current === 3 ? Notification("success", "제출 완료") : null }
        </Grid>
    </>
);

export default ApplyTemPlate;
