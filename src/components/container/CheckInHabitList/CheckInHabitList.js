import React, {useContext} from "react";

import HabitItem from "../../presentational/HabitItem/HabitItem";

import { HabitContext } from "../../../contexts/HabitContext";

import { Header, List, Card, Button } from "semantic-ui-react";

function CheckInHabitList() {
    let habitContext = useContext(HabitContext);
    let items = habitContext.habits;

    if (items.length > 0) {
        let itemsElements = items.map((item, index) => {
            if (item.longestStreak < 66) {
                // set time to 0 so that the only comparison is date
                let todaysDate = new Date().setHours(0, 0, 0, 0);
                let lastCheckedInDate = new Date(item.lastCheckedIn).setHours(0, 0, 0, 0);
                return (
                    <List.Item key={index}>
                        <Card fluid>
                            <HabitItem values={item} />
                            <Button disabled={todaysDate === lastCheckedInDate} onClick={() => {habitContext.checkInHabit(index)}}>
                                <Button.Content>Check In</Button.Content>
                            </Button>
                        </Card>
                    </List.Item>
                );
            } else {
                return null;
            }
        }).reverse();

        return (
            <>
                <Header as="h1">In progress habits</Header>
                <List>
                    {itemsElements}
                </List>
            </>
        );
    } else {
        return (
            <Header as="h1">There are no in progress habits!</Header>
        );
    }
}

export default CheckInHabitList;
