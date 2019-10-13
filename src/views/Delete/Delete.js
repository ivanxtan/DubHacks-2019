import React, { useContext, useState } from "react";
import {Redirect} from "react-router-dom";

import { HabitContext } from "../../contexts/HabitContext";

import DeleteHabitList from "../../components/container/DeleteHabitList/DeleteHabitList";

import { Header, Button } from "semantic-ui-react";

function Delete() {
    let habitContext = useContext(HabitContext);
    let habits = habitContext.habits;

    let [redirect, setRedirect] = useState(false);

    if (redirect) {
        return (
            <Redirect to="/" />
        );
    } else {
        return (
            <>
                <Header as="h1" color="red">Delete</Header>
                <Button color="black" onClick={() => {setRedirect(true)}}>
                    Back to home
                </Button>
                <DeleteHabitList items={habits} />
            </>
        );
    }
}

export default Delete;
