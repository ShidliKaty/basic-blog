import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import PostsList from "./pages/PostsList";
import UsersList from "./pages/UsersList";
import TodosList from "./pages/TodosList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to='posts' /> },
      { path: "posts", element: <PostsList /> },
      { path: "users", element: <UsersList /> },
      { path: "todos", element: <TodosList /> },
    ],
  },
]);
