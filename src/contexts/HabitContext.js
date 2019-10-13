import React, { createContext, useState, useEffect } from "react";

let HabitContext = createContext(null);

function HabitProvider(props) {
    /* Load habits from localStorage */
    let initialHabits = JSON.parse((localStorage.getItem("habits") || "[]"));
    let [habits, setHabits] = useState(initialHabits);

    /* Update localStorage every habits change */
    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habits));
    }, [habits]);


    /**
     * Adds a habit.
     * 
     * @param {String} name the desired name
     * @param {String} description the desired description
     */
    let addHabit = (name, description) => {
        if (name && description) {
            let habitInfo = {
                name: name,
                description: description
            };
    
            let habit = {
                info: habitInfo,
                longestStreak: 0,
                currentStreak: 0,
                lastCheckedIn: new Date().setHours(0, 0, 0, 0)
            }
    
            setHabits((oldHabits) => [...oldHabits, habit]);
        }
    }

    /**
     * Deletes a desired habit.
     * 
     * @param {Number} index the desired index
     */
    let deleteHabit = (index) => {
        setHabits((oldHabits) => {
            let first = oldHabits.slice(0, index);
            let second = oldHabits.slice(index + 1, oldHabits.length);
            let combined = [...first, ...second];

            return combined;
        });
    }

    /**
     * Checks in a desired habit.
     * 
     * @param {Number} index the desired index
     */
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