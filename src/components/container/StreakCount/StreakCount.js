import React, {useContext} from "react";

import { HabitContext } from "../../../contexts/HabitContext";

import { Header, Icon } from 'semantic-ui-react'

function StreakCount() {
    let habitContext = useContext(HabitContext);
    if(habitContext.habits.length === 0) {
      return null;
    }
    else {
      let maxnum = 0;
      let maxhab = "";

      for(let i = 0; i < habitContext.habits.length; i++) {
        let hab1 = habitContext.habits[i];
        if(hab1.currentStreak >= maxnum) {
          maxnum = hab1.currentStreak;
          maxhab = hab1.info.name;
        }
      }
      return (
        <>
          <Header as="h1"><Icon name='fire' />Your longest current streak is {maxnum} day{maxnum !== 1 ? "s" : null} to {maxhab}</Header>
        </>
      );
  }
}

export default StreakCount;
