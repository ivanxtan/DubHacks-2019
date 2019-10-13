import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HabitProvider } from "../../contexts/HabitContext";

import Home from "../../views/Home/Home";
import Create from "../../views/Create/Create";
import Delete from "../../views/Delete/Delete";

import styles from "./App.module.css";

function App() {
    return (
        <Router>
            <HabitProvider>
                    <main className={styles.main}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/create" component={Create} />
                            <Route exact path="/delete" component={Delete} />
                        </Switch>
                    </main>
            </HabitProvider>
        </Router>
    );
}

export default App;