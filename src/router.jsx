import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { postsListRoute } from "./pages/PostsList";
import { usersListRoute } from "./pages/UsersList";
import { todosListRoute } from "./pages/TodosList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { newPostRoute } from "./pages/NewPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to='posts' /> },
          {
            path: "posts",
            children: [
              { index: true, ...postsListRoute },
              { path: ":postId", ...postRoute },
              { path: "new", ...newPostRoute },
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
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
