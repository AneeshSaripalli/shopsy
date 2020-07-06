import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route to="/" component={Home} />
            </Switch>
        </BrowserRouter>)
};

export default AppRouter;