import React, {useContext} from "react";

import { HabitContext } from "../../contexts/HabitContext";

function Home() {
    let habitContext = useContext(HabitContext);

    /* Temporary habit rendering */
    let habits = habitContext.habits;
    let renderedHabits = habits.map((habit) => {
        return (
            <>
                <h1>{habit.info.name}</h1>
                <p>{habit.info.description}</p>
            </>
        );
    });

    return (
        <>
        <h1>Home</h1>
        {renderedHabits}
        </>
    );
}

export default Home;
