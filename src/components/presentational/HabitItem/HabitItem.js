import React from "react";

function HabitItem(props) {
    let values = props.values;
    return (
        <>
            <h2>Habit: {values.info.name}</h2>
            <p>{values.info.description}</p>
            <ul>
                <li>Longest Streak: {values.longestStreak} days</li>
                <li>Current Streak: {values.currentStreak} days</li>
                <li>Last Check In: {new Date(values.lastCheckedIn)}</li>
            </ul>
        </>
    );
}

export default HabitItem;