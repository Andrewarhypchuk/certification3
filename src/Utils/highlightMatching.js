import React from "react";
export const highlightMatchingText = (text, query) => {
  const regex = new RegExp(`(${query})`, "i");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    regex.test(part) ? <mark key={index}>{part}</mark> : part
  );
};
