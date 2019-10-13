import React, {useContext} from "react";

import { HabitContext } from "../../contexts/HabitContext";

import HabitForm from "../../components/container/HabitForm/HabitForm";

import { Header } from "semantic-ui-react";

function Create() {
    let habitContext = useContext(HabitContext);
    return (
        <>
            <Header as="h1" color="green">Create</Header>
            <HabitForm onSubmit={habitContext.addHabit} />
        </>
    );
}

export default Create;
