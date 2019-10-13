import React, {useContext} from "react";

import HabitItem from "../../presentational/HabitItem/HabitItem";

import { HabitContext } from "../../../contexts/HabitContext";

function CheckInHabitList() {
    let habitContext = useContext(HabitContext);
    let items = habitContext.habits;

    if (items.length > 0) {
        let itemsElements = items.map((item, index) => {
            if (item.longestStreak < 66) {
                // set time to 0 so that the only comparison is date
                let todaysDate = new Date().setHours(0, 0, 0, 0);
                let lastCheckedInDate = new Date(item.lastCheckedIn).setHours(0, 0, 0, 0);
                return (
                    <li key={index}>
                        <HabitItem values={item} />
                        <button disabled={todaysDate === lastCheckedInDate} onClick={() => {habitContext.checkInHabit(index)}}>Check In</button>
                    </li>
                );
            } else {
                return null;
            }
        }).reverse();

        return (
            <>
                <h1>In progress habits</h1>
                <ul>
                    {itemsElements}
                </ul>
            </>
        );
    } else {
        return (
            <h1>There are no in progress habits!</h1>
        );
    }
}

export default CheckInHabitList;
