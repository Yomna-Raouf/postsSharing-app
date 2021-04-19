import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import "./DeletePostIcon.css";

const DeletePostIcon = ({ id }) => {
  const { dispatch } = useContext(PostContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "DELETE_POST", id: id });
  };

  return (
    <form onSubmit={handleSubmit} className="DeletePostIcon">
      <button type="submit">
        <DeleteOutlineIcon />
      </button>
    </form>
  );
};

export { DeletePostIcon };
