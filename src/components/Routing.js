import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main";
import Details from "./Details";

export default class Routing extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Main} />
                    {/* both /roster and /roster/:number begin with /roster */}
                    <Route path='/Details' component={Details} />
                </div>
            </Router>
        )
    }
}