import { useState, useContext } from "react";
import "./EditPostForm.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
// import { PostHeader } from "../postHeader/PostHeader";
import Form from "react-bootstrap/Form";
import { PostContext } from "../../context/PostContext";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const EditPostForm = ({ id, post }) => {
  const [modalShow, setModalShow] = useState(false);

  const [postBody, setPostBody] = useState(post?.body);
  const { dispatch } = useContext(PostContext);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "EDIT_POST", id: id });
    setModalShow(false);
  };

  return (
    <div className="EditPostForm">
      <div className="EditPostForm__EditButtonContainer">
        {/*  <button onClick={() => setModalShow(true)}>Create Post</button> */}
        <button
          onClick={() => {
            setModalShow(true);
          }}
          className="EditPostForm__EditButton"
        >
          <EditOutlinedIcon />
        </button>
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
        <Form onSubmit={(e) => handleSubmit(e, id)}>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="what's on your mind"
                value={postBody}
                onChange={(e) => setPostBody(e.target.value)}
              />
            </Form.Group>

            {/*  <PostHeader /> */}
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="CreatePostForm__postButton">
              Update
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export { EditPostForm };
