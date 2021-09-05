import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}
