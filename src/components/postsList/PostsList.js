import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostContext";
import { Post } from "../post/Post";
import { CreatePostForm } from "../CreatePostForm/CreatePostForm";

const PostsList = () => {
  const { postsData } = useContext(PostContext);
  const [postsState, setPostsState] = useState(postsData);

  useEffect(() => {
    setPostsState(postsData);
  }, [postsData]);

  useEffect(() => {
    console.log(postsState);
  }, [postsState]);

  console.log(postsState);

  return (
    <>
      {!postsState.length ? (
        <h1 style={{ textAlign: "center", color: "#5ddcd2" }}>Loading....</h1>
      ) : (
        <>
          <div>
            <CreatePostForm />
          </div>

          <div style={{ marginTop: "7.5em" }}>
            {postsState?.map((postData) => (
              <Post key={postData.id} postData={{ ...postData }} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PostsList;
