import React from "react";

import HabitItem from "../HabitItem/HabitItem";

function CompletedHabitList(props) {
    let items = props.items;

    if (items.length > 0) {
        let itemsElements = items.map((item, index) => {
            if (item.longestStreak >= 66) {
                return (
                    <li key={index}>
                        <HabitItem values={item} />
                    </li>
                );
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
