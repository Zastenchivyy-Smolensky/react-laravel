import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./about";
import Navbar from "./Navbar";
import Top from "./Top";
import User from "./User";
import UserDetail from "./UserDetail";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Top} />
                    <Route path="/about" component={About} />
                    <Route path="/user" component={User} />
                    <Route path="/user/:id" component={UserDetail} />
                </Switch>
            </div>
        </Router>
    );
}
if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}

export default App;
