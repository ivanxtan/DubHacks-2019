import React, {useContext, useState} from "react";
import {Redirect} from "react-router-dom";

import { HabitContext } from "../../contexts/HabitContext";

import HabitForm from "../../components/container/HabitForm/HabitForm";

import { Header, Button } from "semantic-ui-react";

function Create() {
    let habitContext = useContext(HabitContext);

    let [redirect, setRedirect] = useState(false);
    if (redirect) {
        return (
            <Redirect to="/" />
        );
    } else {
        return (
            <>
                <Header as="h1" color="green">Create</Header>
                <HabitForm onSubmit={habitContext.addHabit} />
                <br />
                <Button color="black" onClick={() => {setRedirect(true)}}>
                    Back to home
                </Button>
            </>
        );
    }
}

export default Create;
