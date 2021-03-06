import React, {useContext} from "react";

import { HabitContext } from "../../../contexts/HabitContext";

import { Header, Icon } from 'semantic-ui-react'

function StreakCount() {
    let habitContext = useContext(HabitContext);
    if(habitContext.habits.length === 0) {
      return null;
    } else {
      let maxnum = 0;
      let maxhab = "";

      for (let i = 0; i < habitContext.habits.length; i++) {
        let hab1 = habitContext.habits[i];
        if (hab1.currentStreak >= maxnum && hab1.longestStreak < 66) {
          maxnum = hab1.currentStreak;
          maxhab = hab1.info.name;
        }
      }
      if (maxnum !== 0) {
        return (
          <>
            <Header as="h1" textAlign="center"><Icon name='fire' />Your longest current streak is {maxnum} day{maxnum !== 1 ? "s" : null} with the goal to {maxhab}!</Header>
          </>
        );
      } else {
        return null;
      }
  }
}

export default StreakCount;
