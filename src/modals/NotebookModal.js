import React, { useState } from "react";
import Modal from "react-modal";

//Styles
import { CreateButtonStyled } from "../styles";

//Stores
import notebookStore from "../stores/notebookStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const NotebookModal = ({ collection, isOpen, closeModal, oldNotebook }) => {
  const [notebook, setNotebook] = useState(
    oldNotebook ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setNotebook({ ...notebook, [event.target.name]: event.target.value });
  };

  //   const handleImage = (event) =>
  //     setNotebook({ ...notebook, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore[oldNotebook ? "updateNotebook" : "createNotebook"](
      notebook,
      collection
    );
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>New Note</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Note Name</label>
            <input
              required
              type="text"
              name="name" //exact name of the argument in notebookModal function
              onChange={handleChange}
              value={notebook.name}
              className="form-control"
            />
          </div>
          {/* <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="1"
              onChange={handleChange}
              className="form-control"
              value={notebook.price}
            />
          </div> */}
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            class="form-control"
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={notebook.description}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Tag</label>
          <input
            class="form-control"
            name="tag"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={notebook.tags}
          />
        </div>

        <CreateButtonStyled className="btn float-right">
          {oldNotebook ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NotebookModal;
