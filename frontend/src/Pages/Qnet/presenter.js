import React from "react";
import Header from "Components/common/Header";
import Section from "Components/common/Section";
import { MenuLabel } from "Components/common/Label";
import { FormWrapper } from "Components/common/Form";
import { Regiform, Searchform } from "Components/Register";
import oc from "open-color";

const Qnet = ({ GisaForm,handleChange,action, ChangeAction,type,GetGisas,ClickAction,search,KeyAction,handlePage,SubmitGisa}) => (
    <>
        <Header title="Q-Net" link="/qnet" onClick={() =>ChangeAction("search")} bg="white" fg={oc.violet[5]} gr1={oc.violet[9]} gr2={oc.grape[4]}>
            { action === "regi" && <MenuLabel ChangeAction={ChangeAction} action="search" labelcolor="violet" iconname="search" labeltext="자격증 조회" /> }
            { action === "search" && <MenuLabel ChangeAction={ChangeAction} action="regi" labelcolor="violet" iconname="write" labeltext="자격증 등록" /> }
        </Header>
        <Section>
            { action === "regi" && <FormWrapper bg={oc.violet[4]} BoxWid="500px" LogoName="Register">
                <Regiform type={type} GisaForm={GisaForm} handleChange={handleChange} SubmitGisa={SubmitGisa} btColor="violet" iconcolor={oc.violet[6]} />
            </FormWrapper>}
            { action === "search" && <FormWrapper bg={oc.violet[4]} BoxWid="1000px" BoxHei="780px" LogoName="Search"> 
                <Searchform handlePage={handlePage} KeyAction={KeyAction} ClickAction={ClickAction} searchValue={search} Action={GetGisas} type={type} phColor={oc.violet[2]} borColor={oc.violet[5]} icColor="violet" /> 
            </FormWrapper>}
        </Section> 
    </>
);

export default Qnet;
