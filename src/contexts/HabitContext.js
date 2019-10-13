import React, { createContext, useState } from "react";

let HabitContext = createContext(null);

function HabitProvider(props) {
    let [habits, setHabits] = useState([]);

    let value = {
        habits: habits
    };

    return (
        <HabitContext.Provider value={value}>
            {props.children}
        </HabitContext.Provider>
    );
}

export { HabitContext, HabitProvider };