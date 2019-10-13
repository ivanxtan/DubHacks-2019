import React, {useContext} from "react";

import HabitItem from "../../presentational/HabitItem/HabitItem";

import { HabitContext } from "../../../contexts/HabitContext";

import { Header, List, Button, Icon, Card } from "semantic-ui-react";

function DeleteHabitList(props) {
    let habitContext = useContext(HabitContext);
    let items = props.items;

    if (items.length > 0) {
        let itemsElements = items.map((item, index) => {
            if (item.longestStreak < 66) {
                return (
                    <List.Item key={index}>
                        <Card fluid>
                            <HabitItem values={item} />
                            <Button animated onClick={() => {habitContext.deleteHabit(index)}}>
                                <Button.Content visible>Delete</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="delete" />
                                </Button.Content>
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
                <List relaxed="very">
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

export default DeleteHabitList;
