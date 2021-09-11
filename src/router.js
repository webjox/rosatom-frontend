import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/product" component={Product}/>
            </Switch>
        </Router>
    );
}
