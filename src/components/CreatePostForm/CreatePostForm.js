import { useState, useContext } from "react";
import "./CreatePostForm.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
// import { PostHeader } from "../postHeader/PostHeader";
import Form from "react-bootstrap/Form";
import { PostContext } from "../../context/PostContext";

const CreatePostForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const [postBody, setPostBody] = useState({
    body: "",
    hashtags: [{ name: "" }],
    photos: [{ img_url: "" }],
  });
  const { dispatch } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalShow(false);
    dispatch({ type: "CREATE_POST", post: postBody });
  };

  return (
    <div className="CreatePostForm">
      <div className="CreatePostForm__createButtonContainer">
        <button onClick={() => setModalShow(true)}>Create Post</button>
      </div>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title id="contained-modal-title-vcenter">
            Share your thoughts with your friends ;)
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="what's on your mind"
                value={postBody.body}
                onChange={(e) =>
                  setPostBody({ ...postBody, body: e.target.value })
                }
              />
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Add some hashtag"
                value={postBody.hashtags[0].name}
                onChange={(e) =>
                  setPostBody({
                    ...postBody,
                    hashtags: [{ name: e.target.value }],
                  })
                }
              />
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Image url"
                value={postBody.photos[0].img_url}
                onChange={(e) =>
                  setPostBody({
                    ...postBody,
                    photos: [{ img_url: e.target.value }],
                  })
                }
              />
            </Form.Group>

            {/*  <PostHeader /> */}
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="CreatePostForm__postButton">
              Post
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export { CreatePostForm };
