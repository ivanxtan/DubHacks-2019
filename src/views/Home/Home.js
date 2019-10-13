import React, {useState} from "react";
import { Redirect } from "react-router-dom";

import CheckInHabitList from "../../components/container/CheckInHabitList/CheckInHabitList";

import CompletedHabitList from "../../components/container/CompletedHabitList/CompletedHabitList";

import StreakCount from "../../components/container/StreakCount/StreakCount";

import { Header, Container, Button, Divider } from 'semantic-ui-react'

function Home() {
    let [destination, setDestination] = useState(null);

    if (destination) {
        return (
            <Redirect to={destination} />
        );
    } else {
        return (
            <>
                <Container as="header" text>
                    <Header as='h1' textAlign="center">Habituator</Header>
                    <p>
                        Habituator is a web app created with the goal of 
                        helping users follow through with their habits. By 
                        keeping track of the users’ commitments to their 
                        desired habits, we hope to motivate people to form the 
                        habits they’ve always had trouble with. Users can track 
                        as many habits as they’d like, and check in daily to 
                        ensure they’re keeping up with their goals. On average, 
                        it takes 66 days for a new practice to form into a habit. 
                        Once a user has hit a 66 day streak of checking in, 
                        they’ve successfully formed a habit and completed their 
                        goal. The Habituator is a simple yet effective tool 
                        that emphasizes the importance of consistency in 
                        building skills and other habits.
                    </p>
                </Container>
                <Divider horizontal />
                <Container as="nav" textAlign="center">
                    <Button color="green" onClick={() => {setDestination("/create")}}>
                        Create a New Habit
                    </Button>
                    <Button color="red" onClick={() => {setDestination("/delete")}}>
                        Delete an Existing Habit
                    </Button>
                </Container>
    
                <StreakCount />
                <CheckInHabitList />
                <CompletedHabitList />
            </>
        );
    }
}

export default Home;
