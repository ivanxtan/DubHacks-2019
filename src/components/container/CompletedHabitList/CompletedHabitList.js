import React, {useContext} from "react";

import { HabitContext } from "../../../contexts/HabitContext";

import { Header, List, Card } from "semantic-ui-react";

function CompletedHabitList() {
    let habitContext = useContext(HabitContext);
    let items = habitContext.habits;

    let hasCompleted = false;
    let itemsElements = items.map((item, index) => {
        if (item.longestStreak >= 66) {
            hasCompleted = true;
            return (
                <List.Item key={index}>
                    <Card fluid>
                        <Card.Content header={`Habit: ${item.info.name}`} />
                        <Card.Content>
                            <Card.Description>{item.info.description}</Card.Description>
                            <List>
                                <List.Item>
                                    <List.Header>Date of Completion</List.Header>
                                    {new Date(item.lastCheckedIn).toLocaleDateString()}
                                </List.Item>
                            </List>
                        </Card.Content>
                    </Card>
                </List.Item>
            );
        } else {
            return null;
        }
    }).reverse();

    if (hasCompleted) {
        return (
            <>
                <Header as="h1" color="green">Completed Habits</Header>
                <List relaxed="very">
                    {itemsElements}
                </List>
            </>
        );
    } else {
        return (
            <Header as="h1" textAlign="center">There are no completed habits!</Header>
        );
    }
}

export default CompletedHabitList;
