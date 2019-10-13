import React from "react";

import { Card, List, Progress } from 'semantic-ui-react'

function HabitItem(props) {
    let values = props.values;
    return (
        <>
            <Card.Content header={`Habit: ${values.info.name}`} />
            <Card.Content>
                <Card.Description>{values.info.description}</Card.Description>
                <List>
                    <List.Item>
                        <List.Header>Longest Streak</List.Header>
                        {values.longestStreak} day{values.longestStreak !== 1 ? "s" : null}
                    </List.Item>
                    <List.Item>
                        <List.Header>Current Streak</List.Header>
                        {values.currentStreak} day{values.currentStreak !== 1 ? "s" : null}
                    </List.Item>
                    <List.Item>
                        <List.Header>Last Check In</List.Header>
                        {(new Date(values.lastCheckedIn)).toLocaleDateString()}
                    </List.Item>
                </List>
                <Progress percent={Math.max(((values.currentStreak / 66) * 100), 0)} indicating style={{margin: "10px 0px 0px"}}/>
            </Card.Content>
        </>
    );
}

export default HabitItem;