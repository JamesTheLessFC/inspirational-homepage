import React from "react";
import Goal from "../goal/Goal";

export default function Goals({ goals, markAsComplete }) {
  return (
    <div>
      {Object.entries(goals).map((goal) => (
        <Goal key={goal[1].id} goal={goal[1]} markAsComplete={markAsComplete} />
      ))}
    </div>
  );
}
