import { Form, Link } from "react-router-dom";

const PostForm = ({ users, defaultValues = {}, isSubmitting }) => {
  return (
    <Form method='post' className='form'>
      <div className='form-row'>
        <div className='form-group error'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            defaultValue={defaultValues.title}
          />
          <div className='error-message'>Required</div>
        </div>
        <div className='form-group'>
          <label htmlFor='userId'>Author</label>
          <select name='userId' id='userId' defaultValue={defaultValues.userId}>
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
          <textarea
            name='body'
            id='body'
            defaultValue={defaultValues.body}
          ></textarea>
        </div>
      </div>
      <div className='form-row form-btn-row'>
        <Link className='btn btn-outline' to='..'>
          Cancel
        </Link>
        <button disabled={isSubmitting} className='btn'>
          {isSubmitting ? "Saving" : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default PostForm;
