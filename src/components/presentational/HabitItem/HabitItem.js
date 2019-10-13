import React from "react";

function HabitItem(props) {
    let values = props.values;
    return (
        <>
            <h2>Habit: {values.info.name}</h2>
            <p>{values.info.description}</p>
            <ul>
                <li>Longest Streak: {values.longestStreak} day{values.longestStreak !== 1 ? "s" : null}</li>
                <li>Current Streak: {values.currentStreak} day{values.currentStreak !== 1 ? "s" : null}</li>
                <li>Last Check In: {(new Date(values.lastCheckedIn)).toLocaleDateString()}</li>
            </ul>
        </>
    );
}

export default HabitItem;