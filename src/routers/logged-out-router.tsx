import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

const LoggedOutRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/sign-in">
                    <SignIn />
                </Route>
                <Route path="/">
                    <div>Home</div>
                </Route>
            </Switch>
        </Router>
    );
};

export default LoggedOutRouter;
