import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <>
      <h1 className='page-title'>Posts</h1>
      <div className='card-grid'>
        {posts.map((post) => (
          <div key={post.id} className='card'>
            <div className='card-header'>{post.title}</div>
            <div className='card-body'>
              <div className='card-preview-text'>{post.body}</div>
            </div>
            <div className='card-footer'>
              <Link to={`/posts/${post.id}`} className='btn'>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const loader = ({ request: { signal } }) => getPosts({ signal });

export const postsListRoute = {
  loader,
  element: <PostsList />,
};
