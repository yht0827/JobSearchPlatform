import React from "react";
import Router from "Components/common/Router";
import GlobalStyles from "lib/GlobalStyles";
import { NotificationContainer } from "react-notifications";

const App = () => {
    return (
        <>
            <Router />
            <GlobalStyles />
            <NotificationContainer />
        </>
    );
};

export default App;
