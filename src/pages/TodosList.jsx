import { useLoaderData } from "react-router-dom";
import { getTodods } from "../api/todos";
import TodoItem from "../components/TodoItem";

const TodosList = () => {
  const todos = useLoaderData();

  return (
    <>
      <h1 className='page-title'>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
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
