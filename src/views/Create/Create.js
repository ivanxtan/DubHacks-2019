import React, {useContext} from "react";

import { HabitContext } from "../../contexts/HabitContext";

import HabitForm from "../../components/container/HabitForm/HabitForm";

function Create() {
    let habitContext = useContext(HabitContext);
    return (
        <>
            <h1>Create</h1>
            <HabitForm onSubmit={habitContext.addHabit} />
        </>
    );
}

export default Create;
