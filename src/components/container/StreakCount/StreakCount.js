import React, {useContext} from "react";

import { HabitContext } from "../../../contexts/HabitContext";

function StreakCount() {
    let habitContext = useContext(HabitContext);
    if(habitContext.habits.length == 0) {
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
          <p>Your longest current streak is {maxnum} days for {maxhab}</p>
      );
  }
}

export default StreakCount;
