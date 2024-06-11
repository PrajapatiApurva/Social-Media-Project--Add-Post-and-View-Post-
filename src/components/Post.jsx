import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

function Post({ post }) {
  const {deletePost} = useContext(PostListContext);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span 
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <button key={tag} type="button" className="btn btn-primary post-tags">
            {tag}
          </button>
        ))}
        <div className="alert alert-primary reaction" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
}

export default Post;
