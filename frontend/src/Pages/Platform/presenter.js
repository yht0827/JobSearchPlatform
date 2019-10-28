import React from "react";
import Header from "Components/common/Header";
import Section from "Components/common/Section";
import { MenuLabel } from "Components/common/Label";
import { FormWrapper, MainForm } from "Components/common/Form";
import { PlatformTemPlate, CompanyList } from "Components/Platform";
import { pageDesc } from "lib/Data";
import oc from "open-color";

const Platform = ({ visible, isLogged, ChangeAction,ChangeState,action, LogOutAction }) => (
    <>
        { 
            visible === true
                ? <Header title="Work Korea" onClick={() => ChangeState()} link="/platform" bg="white" fg={oc.teal[7]} gr1={oc.teal[6]} gr2={oc.cyan[5]}>
                    { isLogged
                        ? (action === "main" && <> <MenuLabel ChangeAction={ChangeAction} action="profile" labelcolor="teal" iconname="user circle" labeltext="프로필　" /> <MenuLabel dir="#" LogOutAction={LogOutAction} labelcolor="red" iconname="log out" labeltext="로그아웃" /> </>)
                        : <MenuLabel dir="/auth" labelcolor="teal" iconname="sign-in" labeltext="로그인" /> }
                </Header> : null
        }
        <Section>
            { isLogged ? (action === "profile" ? <FormWrapper bg={oc.green[4]} BoxWid="800px" BoxHei="700px" LogoName="Profile"><PlatformTemPlate /></FormWrapper> : <CompanyList />) : <MainForm pageDesc={pageDesc[2]} color="green" /> }
        </Section> 
    </>
);

export default Platform;
