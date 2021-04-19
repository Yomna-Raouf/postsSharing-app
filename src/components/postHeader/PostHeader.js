import "./PostHeader.css";
import { Avatar } from "../Avatar/Avatar";
import { DeletePostIcon } from "../DeletePostIcon/DeletePostIcon";
import { EditPostForm } from "../EditPostForm/EditPostForm";

const PostHeader = ({ postData }) => {
  const calculatePostCreationDays = (date) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date);
    const secondDate = new Date();
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
  };

  return (
    <div className="post__header">
      <div className="post__headerContainer">
        <div className="post__headerAvatar">
          {postData?.user?.avatar ? (
            <div className="post__headerAvatarImage">
              {" "}
              <img
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  border: "2.5px solid #17a2b8",
                  objectFit: "fill",
                }}
                src={postData?.user?.avatar}
                alt={`${postData?.user?.name} profile pic`}
              />{" "}
            </div>
          ) : (
            <Avatar />
          )}
        </div>
        <div className="post__headerInfo">
          <div className="post__headerUserInfo">
            <p>{postData?.user?.name}</p>
            <p>
              {calculatePostCreationDays(postData.created_at) === 0
                ? "today"
                : `${calculatePostCreationDays(postData.created_at)} days ago`}
            </p>
          </div>
          <p>@{postData?.user?.username}</p>
        </div>
        <div className="post__headerEdits">
          <EditPostForm post={postData ? postData : ""} id={postData?.id} />
          <DeletePostIcon id={postData?.id} />
        </div>
      </div>
    </div>
  );
};

export { PostHeader };
