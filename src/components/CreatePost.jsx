import React,{ useContext , useRef } from "react";
import { PostListContext } from "../store/post-list-store";


function CreatePost() {
  const {addPost} = useContext(PostListContext);

  const userIdElem=useRef();
  const titleElem=useRef();
  const bodyElem=useRef();
  const tagsElem=useRef();
  const reactionsElem=useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const userId=userIdElem.current.value;
    const title=titleElem.current.value;
    const body=bodyElem.current.value;
    const tags=tagsElem.current.value.split(' ');
    const reactions=reactionsElem.current.value;

    addPost(userId,title,body,tags,reactions);
    userIdElem.current.value='';
    titleElem.current.value='';
    bodyElem.current.value='';
    tagsElem.current.value=[];
    reactionsElem.current.value='';
  }
  
  return (
    <form className="createPostForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElem}
          className="form-control"
          id="userId"
          placeholder="Enter your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={titleElem}
          className="form-control"
          id="title"
          placeholder="Enter title of the post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Enter your Post Content
        </label>
        <textarea
          ref={bodyElem}
          className="form-control"
          id="body"
          rows="3"
          placeholder="Description of the post"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagsElem}
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by space"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          ref={reactionsElem}
          className="form-control"
          id="reactions"
          placeholder="Enter number of reactions"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
