import { PostBody } from "../postBody/PostBody";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostHeader } from "../postHeader/PostHeader";

import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="post__container">
        <PostHeader />
        <PostBody />
        <PostFooter />
      </div>
    </div>
  );
};

export { Post };
