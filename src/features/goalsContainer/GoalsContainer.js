import React, { useState } from "react";
import Goals from "../goals/Goals";
import GoalForm from "../goalForm/GoalForm";
import { v4 as uuidv4 } from "uuid";

export default function GoalsContainer() {
  const [goals, setGoals] = useState({
    id1: {
      id: "id1",
      text: "Make dinner",
      complete: false,
    },
    id2: {
      id: "id2",
      text: "Water plants",
      complete: false,
    },
    id3: {
      id: "id3",
      text: "Do homework",
      complete: false,
    },
  });

  const markAsComplete = (goalId) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [goalId]: {
        ...prevGoals[goalId],
        complete: true,
      },
    }));
  };

  const addGoal = (text) => {
    const newGoalId = uuidv4();
    setGoals((prevGoals) => ({
      ...prevGoals,
      [newGoalId]: {
        id: newGoalId,
        complete: false,
        text,
      },
    }));
  };

  return (
    <div>
      <GoalForm addGoal={addGoal} />
      <Goals goals={goals} markAsComplete={markAsComplete} />
    </div>
  );
}
