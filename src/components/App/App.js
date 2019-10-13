import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import { HabitProvider } from "../../contexts/HabitContext";

import Home from "../../views/Home/Home";

function App() {
    return (
        <HabitProvider>
            <Router>
            <nav>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                </ul>
            </nav>
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </main>
            </Router>
        </HabitProvider>
    );
}

export default App;