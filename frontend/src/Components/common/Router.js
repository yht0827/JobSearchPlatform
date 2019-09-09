import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Main, Company1, Company2, Ybm, Qnet, Platform, Auth } from "Pages";

export default () => (
    <>
        <Switch>
            <Route exact path="/" component={Main} />  
            <Route path="/company1" component={Company1} />
            <Route path="/company2" component={Company2} />
            <Route path="/ybm" component={Ybm} />
            <Route path="/qnet" component={Qnet} />
            <Route path="/platform" component={Platform} /> 
            <Route path="/auth" component={Auth} /> 
            <Redirect from="*" to="/" />
        </Switch>
    </>
);
