import React, { useState } from "react";

export default function Quote() {
  const [quote, setQuote] = useState({
    text: "Luke, I am your father.",
    author: "Darth Vader",
  });

  return (
    <div>
      <p>{quote.text}</p>
      <p>{quote.author}</p>
    </div>
  );
}
