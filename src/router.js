import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Additional from "./pages/Additional/Additional";

const Router = () => {
    return (
        <Router>
            <Switch>
                <Route path="/users">
                    <Additional/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
};

export default Router;