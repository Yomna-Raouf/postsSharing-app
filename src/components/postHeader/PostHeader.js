import "./PostHeader.css";
import { Avatar } from "../Avatar/Avatar";

const PostHeader = () => {
  return (
    <div className="post__header">
      <div className="post__headerContainer">
        <div className="post__headerAvatar">
          <Avatar />
        </div>
        <div className="post__headerInfo">
          <div className="post__headerUserInfo">
            <p>amr asd</p>
            <p>4 days ago</p>
          </div>
          <p>amrKoritem@</p>
        </div>
      </div>
    </div>
  );
};

export { PostHeader };
