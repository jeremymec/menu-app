import React from "react";
import { Switch, Route } from "react-router-dom";
import Search from "../../pages/Search/Search";
import Restaurant from "../../pages/Restaurant/Restaurant";

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Search} />
                <Route path="/restaurant/:id" component={Restaurant} />
            </Switch>
        </main>
    );
}

export default Main;