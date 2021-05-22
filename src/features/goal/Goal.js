import React from "react";

export default function Goal({ goal, markAsComplete }) {
  const { text, complete, id } = goal;

  const handleClick = () => {
    markAsComplete(id);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick} disabled={complete}>
        Done
      </button>
    </div>
  );
}
