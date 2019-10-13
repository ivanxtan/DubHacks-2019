import React, {useContext} from "react";

import HabitItem from "../../presentational/HabitItem/HabitItem";

import { HabitContext } from "../../../contexts/HabitContext";

function DeleteHabitList(props) {
    let habitContext = useContext(HabitContext);
    let items = props.items;

    if (items.length > 0) {
        let itemsElements = items.map((item, index) => {
            if (item.longestStreak < 66) {
                return (
                    <li key={index}>
                        <HabitItem values={item} />
                        <button onClick={() => {habitContext.deleteHabit(index)}}>Delete</button>
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

export default DeleteHabitList;
