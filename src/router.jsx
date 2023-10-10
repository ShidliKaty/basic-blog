import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { postsListRoute } from "./pages/PostsList";
import UsersList from "./pages/UsersList";
import TodosList from "./pages/TodosList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to='posts' /> },
      {
        path: "posts",
        children: [
          { index: true, ...postsListRoute },
          { path: ":postId", element: <h1>Hi</h1> },
        ],
      },
      { path: "users", element: <UsersList /> },
      { path: "todos", element: <TodosList /> },
    ],
  },
]);
