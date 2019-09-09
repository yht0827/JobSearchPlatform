import React from "react";
import Header from "Components/common/Header";
import Section from "Components/common/Section";
import { MenuLabel } from "Components/common/Label";
import { FormWrapper } from "Components/common/Form";
import { Regiform, Searchform } from "Components/Register";
import oc from "open-color";

const Ybm = ({ action, changeAction }) => (
    <>
        <Header title="YBM" link="/ybm" onClick={() => changeAction("search")} bg="white" fg={oc.orange[6]} gr1={oc.orange[6]} gr2={oc.yellow[7]}>
            { action === "search" && <MenuLabel changeAction={changeAction} action="regi" labelcolor="orange" iconname="write" labeltext="점수 등록" /> }  
            { action === "regi" && <MenuLabel changeAction={changeAction} action="search" labelcolor="orange" iconname="search" labeltext="점수 조회" /> }
        </Header>
        <Section>
            { action === "regi" && <FormWrapper bg={oc.orange[4]} BoxWid="500px" LogoName="Register">
                <Regiform btColor="orange" iconcolor={oc.orange[8]} /></FormWrapper>}
            { action === "search" && <FormWrapper bg={oc.orange[4]} BoxWid="1000px" BoxHei="780px" LogoName="Search"> 
                <Searchform phColor={oc.orange[5]} borColor={oc.orange[9]} icColor="orange" /> </FormWrapper>}
        </Section> 
    </>
);

export default Ybm;
