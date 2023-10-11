import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { postsListRoute } from "./pages/PostsList";
import { usersListRoute } from "./pages/UsersList";
import { todosListRoute } from "./pages/TodosList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";

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
          { path: ":postId", ...postRoute },
        ],
      },
      {
        path: "users",
        children: [
          { index: true, ...usersListRoute },
          { path: ":userId", ...userRoute },
        ],
      },
      { path: "todos", ...todosListRoute },
    ],
  },
]);
