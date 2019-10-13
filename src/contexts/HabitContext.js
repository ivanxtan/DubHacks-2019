import React, { createContext, useState } from "react";

let HabitContext = createContext(null);

function HabitProvider(props) {
    let [habits, setHabits] = useState([]);

    let addHabit = (habitInfo) => {
        let habit = {
            info: habitInfo,
            longestStreak: 0,
            currentStreak: 0,
            lastCheckedIn: new Date(),
            isComplete: false
        }

        setHabits((oldHabits) => [...oldHabits, habit]);
    }

    let value = {
        habits: habits,
        addHabit: addHabit
    };

    return (
        <HabitContext.Provider value={value}>
            {props.children}
        </HabitContext.Provider>
    );
}

export { HabitContext, HabitProvider };