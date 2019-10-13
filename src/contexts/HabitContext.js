import React, { createContext, useState } from "react";

let HabitContext = createContext(null);

function HabitProvider(props) {
    let [habits, setHabits] = useState([]);

    let addHabit = (habitInfo) => {
        let habit = {
            info: habitInfo,
            longestStreak: 0,
            currentStreak: 0,
            lastCheckedIn: new Date().setHours(0, 0, 0, 0),
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

    let checkInHabit = (index) => {
        setHabits((oldHabits) => {
            let current = oldHabits[index];
            // set time to 0 so that the only comparison is date
            let todaysDate = new Date().setHours(0, 0, 0, 0);
            let lastCheckedInDate = new Date(current.lastCheckedIn).setHours(0, 0, 0, 0);
            if (todaysDate > lastCheckedInDate) {
                current.currentStreak++;
                current.longestStreak = Math.max(current.currentStreak, current.longestStreak);
                current.lastCheckedIn = new Date().setHours(0, 0, 0, 0);
    
                let first = oldHabits.slice(0, index);
                let second = oldHabits.slice(index + 1, oldHabits.length);
                let combined = [...first, current, ...second];

                return combined;
            }
            return oldHabits;
        });
    }

    let value = {
        habits: habits,
        addHabit: addHabit,
        deleteHabit: deleteHabit,
        checkInHabit: checkInHabit
    };

    return (
        <HabitContext.Provider value={value}>
            {props.children}
        </HabitContext.Provider>
    );
}

export { HabitContext, HabitProvider };