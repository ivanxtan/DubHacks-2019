import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HabitProvider } from "../../contexts/HabitContext";

import Home from "../../views/Home/Home";
import Create from "../../views/Create/Create";
import Delete from "../../views/Delete/Delete";

import NavBar from "../presentational/NavBar/NavBar";
import FullHeight from "../layout/FullHeight/FullHeight";

import styles from "./App.module.css";

function App() {
    return (
        <Router>
            <HabitProvider>
                <NavBar />
                <FullHeight>
                    <main className={styles.main}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/create" component={Create} />
                            <Route exact path="/delete" component={Delete} />
                        </Switch>
                    </main>
                </FullHeight>
            </HabitProvider>
        </Router>
    );
}

export default App;