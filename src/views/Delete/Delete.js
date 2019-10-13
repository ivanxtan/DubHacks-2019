import React, {useContext} from "react";

import { HabitContext } from "../../contexts/HabitContext";
import {Header} from "semantic-ui-react";

import DeleteHabitList from "../../components/container/DeleteHabitList/DeleteHabitList";{}
function Delete() {
    let habitContext = useContext(HabitContext);
    let habits = habitContext.habits;
    return (
        <>
            <Header as="h1" color="red">Delete</Header>
            <DeleteHabitList items={habits} />
        </>
    );
}

export default Delete;
