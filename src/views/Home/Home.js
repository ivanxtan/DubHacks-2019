import React from "react";

import CheckInHabitList from "../../components/container/CheckInHabitList/CheckInHabitList";
import CompletedHabitList from "../../components/container/CompletedHabitList/CompletedHabitList";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <CheckInHabitList />
            <CompletedHabitList />
        </>
    );
}

export default Home;
