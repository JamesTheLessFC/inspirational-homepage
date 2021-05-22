import React, { useState } from "react";

export default function GoalForm({ addGoal }) {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(goal);
    setGoal("");
  };

  return (
    <section>
      <h3>What's on your mind today?</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.currentTarget.value)}
          placeholder="New Goal"
        />
      </form>
    </section>
  );
}
