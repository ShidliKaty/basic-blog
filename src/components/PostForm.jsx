import { Form, Link } from "react-router-dom";

const PostForm = ({ users }) => {
  return (
    <Form method='post' className='form'>
      <div className='form-row'>
        <div className='form-group error'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' id='title' />
          <div className='error-message'>Required</div>
        </div>
        <div className='form-group'>
          <label htmlFor='userId'>Author</label>
          <select name='userId' id='userId'>
            {users.map((user, i) => (
              <option key={user.id} value={i + 1}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group'>
          <label htmlFor='body'>Body</label>
          <textarea name='body' id='body'></textarea>
        </div>
      </div>
      <div className='form-row form-btn-row'>
        <Link className='btn btn-outline' to='..'>
          Cancel
        </Link>
        <button className='btn'>Save</button>
      </div>
    </Form>
  );
};

export default PostForm;
