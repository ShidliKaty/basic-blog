import { Link, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";

const UsersList = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <>
      <h1 className='page-title'>Users</h1>
      <div className='card-grid'>
        {users.map((user) => (
          <div key={user.id} className='card'>
            <div className='card-header'>{user.name}</div>
            <div className='card-body'>
              <div>{user.company.name}</div>
              <div>{user.website}</div>
              <div>{user.email}</div>
            </div>
            <div className='card-footer'>
              <Link className='btn' to={user.id.toString()}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const loader = ({ request: { signal } }) => getUsers({ signal });

export const usersListRoute = {
  loader,
  element: <UsersList />,
};
