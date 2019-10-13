import React, {useContext} from "react";

import { HabitContext } from "../../contexts/HabitContext";

function Delete() {
    let habitContext = useContext(HabitContext);
    return (
        <>
            <h1>Delete</h1>
        </>
    );
}

export default Delete;