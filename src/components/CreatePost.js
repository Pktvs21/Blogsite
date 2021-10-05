import { React} from 'react';
import { firestore } from '../firebase';
import { useFormInput } from '../hooks';

export default function CreatePost() {
  const title = useFormInput('');
  const content = useFormInput('');
  const subTitle = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('title', title);
    console.log(subTitle);
    console.log(content);

    // need to use different function, pls wait
    firestore.collection('posts').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    });
  }
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input type="text"{...subTitle}/>
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea {...content }/>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}
