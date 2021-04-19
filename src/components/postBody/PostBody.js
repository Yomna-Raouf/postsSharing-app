import "./PostBody.css";
// import image from "./image.png";

const PostBody = ({ postData }) => {
  return (
    <div className="post__body">
      <div className="post__bodyText">{postData.body}</div>
      <div className="post__bodyMood">{postData.emotion}</div>
      <div className="post__bodyHashtags">
        {postData?.hashtags?.length !== 0
          ? postData?.hashtags?.map((hashtag) => (
              <p key={hashtag.id}>#{hashtag.name}</p>
            ))
          : null}
      </div>
      <div className="post__bodyImages">
        {postData?.photos?.map((photo, index) =>
          postData.photos.length !== 0 ? (
            <img key={photo.photo_id} src={photo.img_url} alt="test" />
          ) : null
        )}
      </div>
    </div>
  );
};

export { PostBody };
