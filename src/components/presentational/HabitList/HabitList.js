import React from "react";

import HabitItem from "../HabitItem/HabitItem";

function HabitList(props) {
  let title = props.title;
  let items = props.items;
  return (
        <>
          <h1>{title}</h1>
          <HabitItem values={items[0]} />
        </>
    );
}

export default HabitList;