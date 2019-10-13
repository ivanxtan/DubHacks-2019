import React, { useContext } from "react";

import { HabitContext } from "../../contexts/HabitContext";

import DeleteHabitList from "../../components/container/DeleteHabitList/DeleteHabitList";

import { Header } from "semantic-ui-react";

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
