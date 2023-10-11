import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, body }) => {
  return (
    <div className='card'>
      <div className='card-header'>{title}</div>
      <div className='card-body'>
        <div className='card-preview-text'>{body}</div>
      </div>
      <div className='card-footer'>
        <Link to={`/posts/${id}`} className='btn'>
          View
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
