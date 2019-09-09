import React from "react";
import Header from "Components/common/Header";
import Section from "Components/common/Section";
import { MenuLabel } from "Components/common/Label";
import { FormWrapper, MainForm } from "Components/common/Form";
import { ApplyTemPlate } from "Components/Company";
import { questions, pageDesc } from "lib/Data";
import oc from "open-color";

const Company2 = ({ action, changeAction, steps, changeNextStep, stepReset, current, handleLoader, isLoaded }) => (
    <> 
        <Header title="Company2" link="/company2" onClick={() => { stepReset(); handleLoader(true); }} bg="white" fg={oc.red[7]} gr1={oc.pink[6]} gr2={oc.red[7]}>
            { action === "main" && <MenuLabel changeAction={changeAction} action="apply" labelcolor="red" iconname="write" labeltext="지원서 작성" /> }
        </Header>
        <Section>
            { action === "main" && <MainForm pageDesc={pageDesc[1]} color="red" /> }
            { action === "apply" 
            && <FormWrapper bg={oc.red[8]} BoxWid="1000px" BoxHei="750px" LogoName="Application"> 
                <ApplyTemPlate questions={questions[1]} btcolor="red" icolor={oc.red[7]} subcolor="pink" bg={oc.red[3]} steps={steps} changeNextStep={changeNextStep} current={current} stepReset={stepReset} handleLoader={handleLoader} isLoaded={isLoaded} />
            </FormWrapper> }
        </Section>
    </>
);

export default Company2;
