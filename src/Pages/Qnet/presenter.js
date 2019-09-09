import React from "react";
import Header from "Components/common/Header";
import Section from "Components/common/Section";
import { MenuLabel } from "Components/common/Label";
import { FormWrapper } from "Components/common/Form";
import { Regiform, Searchform } from "Components/Register";
import oc from "open-color";

const Qnet = ({ action, changeAction }) => (
    <>
        <Header title="Q-Net" link="/qnet" onClick={() => changeAction("search")} bg="white" fg={oc.violet[5]} gr1={oc.violet[9]} gr2={oc.grape[4]}>
            { action === "regi" && <MenuLabel changeAction={changeAction} action="search" labelcolor="violet" iconname="search" labeltext="자격증 조회" /> }
            { action === "search" && <MenuLabel changeAction={changeAction} action="regi" labelcolor="violet" iconname="write" labeltext="자격증 등록" /> }
        </Header>
        <Section>
            { action === "regi" && <FormWrapper bg={oc.violet[4]} BoxWid="500px" LogoName="Register">
                <Regiform btColor="violet" iconcolor={oc.violet[6]} />
            </FormWrapper>}
            { action === "search" && <FormWrapper bg={oc.violet[4]} BoxWid="1000px" BoxHei="780px" LogoName="Search"> 
                <Searchform phColor={oc.violet[2]} borColor={oc.violet[5]} icColor="violet" /> 
            </FormWrapper>}
        </Section> 
    </>
);

export default Qnet;
