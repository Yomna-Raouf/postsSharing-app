import { PostBody } from "../postBody/PostBody";
import { PostFooter } from "../PostFooter/PostFooter";
import { PostHeader } from "../postHeader/PostHeader";

import "./post.css";

const Post = ({ postData }) => {
  return (
    <div className="post">
      <div className="post__container">
        <PostHeader postData={postData} />
        <PostBody postData={postData} />
        <PostFooter postData={postData} />
      </div>
    </div>
  );
};

export { Post };
