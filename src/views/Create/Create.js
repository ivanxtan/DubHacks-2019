import React, {useContext} from "react";

import { HabitContext } from "../../contexts/HabitContext";

function Create() {
    let habitContext = useContext(HabitContext);
    return (
        <>
            <h1>Create</h1>
        </>
    );
}

export default Create;