import React, {useContext} from "react";

import HabitItem from "../../presentational/HabitItem/HabitItem";

import { HabitContext } from "../../../contexts/HabitContext";

import { Header, List, Card, Button } from "semantic-ui-react";

function CheckInHabitList() {
    let habitContext = useContext(HabitContext);
    let items = habitContext.habits;

    let hasInProgress = false;
    let itemsElements = items.map((item, index) => {
        if (item.longestStreak < 66) {
            hasInProgress = true;
            // set time to 0 so that the only comparison is date
            let todaysDate = new Date().setHours(0, 0, 0, 0);
            let lastCheckedInDate = new Date(item.lastCheckedIn).setHours(0, 0, 0, 0);
            return (
                <List.Item key={index}>
                    <Card fluid>
                        <HabitItem values={item} />
                        <Button disabled={todaysDate === lastCheckedInDate} color={todaysDate !== lastCheckedInDate ? "green" : "grey"} onClick={() => {habitContext.checkInHabit(index)}}>
                            <Button.Content>Check In</Button.Content>
                        </Button>
                    </Card>
                </List.Item>
            );
        } else {
            return null;
        }
    }).reverse();

    if (hasInProgress) {
        return (
            <>
                <Header as="h1" color="orange">In Progress Habits</Header>
                <List relaxed="very">
                    {itemsElements}
                </List>
            </>
        );
    } else {
        return (
            <Header as="h1" textAlign="center">There are no in-progress habits!</Header>
        );
    }
}

export default CheckInHabitList;
