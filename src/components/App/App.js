import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HabitProvider } from "../../contexts/HabitContext";

import Home from "../../views/Home/Home";
import Create from "../../views/Create/Create";
import Delete from "../../views/Delete/Delete";

import NavBar from "../container/NavBar/NavBar";

function App() {
    return (
        <HabitProvider>
            <Router>
            <NavBar />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/create" component={Create} />
                    <Route exact path="/delete" component={Delete} />
                </Switch>
            </main>
            </Router>
        </HabitProvider>
    );
}

export default App;