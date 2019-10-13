import React, {useContext} from "react";

import { HabitContext } from "../../contexts/HabitContext";

import DeleteHabitList from "../../components/container/DeleteHabitList/DeleteHabitList";

function Delete() {
    let habitContext = useContext(HabitContext);
    let habits = habitContext.habits;
    return (
        <>
            <h1>Delete</h1>
            <DeleteHabitList items={habits} />
        </>
    );
}

export default Delete;
