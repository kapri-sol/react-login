import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sign from '@pages/sign';

const LoggedOutRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/sign">
                    <Sign />
                </Route>
                <Route path="/">
                    <div>Home</div>
                </Route>
            </Switch>
        </Router>
    );
};

export default LoggedOutRouter;
