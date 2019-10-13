import React, {useContext} from "react";

import HabitItem from "../../presentational/HabitItem/HabitItem";

import { HabitContext } from "../../../contexts/HabitContext";

function CompletedHabitList() {
    let habitContext = useContext(HabitContext);
    let items = habitContext.habits;

    if (items.length > 0) {
        let itemsElements = items.map((item, index) => {
            if (item.longestStreak >= 66) {
                return (
                    <li key={index}>
                        <HabitItem values={item} />
                    </li>
                );
            } else {
                return null;
            }
        });

        return (
            <>
                <h1>Completed habits</h1>
                <ul>
                    {itemsElements}
                </ul>
            </>
        );
    } else {
        return (
            <h1>There are no completed habits!</h1>
        );
    }
}

export default CompletedHabitList;
