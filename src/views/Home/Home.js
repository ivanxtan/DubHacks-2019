import React from "react";

import CheckInHabitList from "../../components/container/CheckInHabitList/CheckInHabitList";

import CompletedHabitList from "../../components/container/CompletedHabitList/CompletedHabitList";

import StreakCount from "../../components/container/StreakCount/StreakCount";

import { Header, Icon } from 'semantic-ui-react'

function Home() {
    return (
        <>
            <Header as='h1' icon textAlign='center'>
                <Header.Content>Habituator</Header.Content>
                <Icon name='edit' />
            </Header>

            <StreakCount />
            <CheckInHabitList />
            <CompletedHabitList />
        </>
    );
}

export default Home;
