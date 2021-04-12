import "./PostBody.css";
import image from "./image.png";

const PostBody = () => {
  return (
    <div className="post__body">
      <div className="post__bodyText">UnStoppable you</div>
      <div className="post__bodyMood">Glad</div>
      <div className="post__bodyImages">
        <img src={image} alt="venom" />
      </div>
    </div>
  );
};

export { PostBody };
