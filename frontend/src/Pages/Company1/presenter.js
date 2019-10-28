import React from "react";
import Header from "Components/common/Header";
import Section from "Components/common/Section";
import { MenuLabel } from "Components/common/Label";
import { FormWrapper, MainForm } from "Components/common/Form";
import { ApplyTemPlate } from "Components/Company";
import { questions, pageDesc } from "lib/Data";
import oc from "open-color";

const Company1 = ({ action, ChangeAction, steps, changeNextStep, stepReset, current, handleLoader, isLoaded }) => (
    <>
        <Header title="SAMSUNG" link="/company1" onClick={() => { stepReset(); handleLoader(true); }} bg="white" fg={oc.blue[7]} gr1={oc.blue[6]} gr2={oc.indigo[7]}>
            { action === "main" && <MenuLabel ChangeAction={ChangeAction} action="apply" labelcolor="blue" iconname="write" labeltext="지원서 작성" /> }
        </Header>
        <Section>
            { action === "main" && <MainForm pageDesc={pageDesc[0]} color="blue" />}
            { action === "apply" && <FormWrapper bg={oc.indigo[8]} BoxWid="1000px" BoxHei="750px" LogoName="Application">
                <ApplyTemPlate companyNm={"Company1"} questions={questions[0]} btcolor="blue" icolor={oc.blue[7]} subcolor="teal" bg={oc.blue[3]} steps={steps} changeNextStep={changeNextStep} current={current} stepReset={stepReset} handleLoader={handleLoader} isLoaded={isLoaded} />
            </FormWrapper> }
        </Section>
    </>
);

export default Company1;
