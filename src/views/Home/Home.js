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
                <Container text>
                    <Header as='h1' textAlign="center">Habituator</Header>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                    viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                    </p>
                </Container>
                <Divider horizontal />
                <Container textAlign="center">
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
