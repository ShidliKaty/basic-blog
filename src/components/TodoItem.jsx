import React from "react";

const TodoItem = ({ completed, title }) => {
  return <li className={completed ? "strike-through" : null}>{title}</li>;
};

export default TodoItem;
