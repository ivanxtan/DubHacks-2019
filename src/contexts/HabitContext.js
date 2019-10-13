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

    let deleteHabit = (index) => {
        setHabits((oldHabits) => {
            let first = oldHabits.slice(0, index);
            let second = oldHabits.slice(index + 1, oldHabits.length);
            let combined = [...first, ...second];

            return combined;
        });
    }

    let value = {
        habits: habits,
        addHabit: addHabit,
        deleteHabit: deleteHabit
    };

    return (
        <HabitContext.Provider value={value}>
            {props.children}
        </HabitContext.Provider>
    );
}

export { HabitContext, HabitProvider };