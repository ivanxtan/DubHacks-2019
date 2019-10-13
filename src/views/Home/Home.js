import React, {useContext} from "react";

import { HabitContext } from "../../contexts/HabitContext";

function Home() {
    let habitContext = useContext(HabitContext);
    return (
        <h1>Home</h1>
    );
}

export default Home;