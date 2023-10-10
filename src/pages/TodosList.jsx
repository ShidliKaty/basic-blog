import { useLoaderData } from "react-router-dom";
import { getTodods } from "../api/todos";

const TodosList = () => {
  const todos = useLoaderData();
  console.log(todos);
  return (
    <>
      <h1 className='page-title'>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? "strike-through" : null}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

const loader = ({ request: { signal } }) => getTodods({ signal });

export const todosListRoute = {
  loader,
  element: <TodosList />,
};
