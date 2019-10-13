import React from "react";

import HabitItem from "../HabitItem/HabitItem";

function HabitList(props) {
    let title = props.title;
    let items = props.items;

    let itemsElements = items.map((item) => {
        return (
            <li>
                <HabitItem values={item} />
            </li>
        );
    });
    return (
        <>
            <h1>{title}</h1>
            <ul>
                {itemsElements}
            </ul>
        </>
    );
}

export default HabitList;