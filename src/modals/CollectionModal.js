import React, { useState } from "react";
import Modal from "react-modal";

//Styles
import { CreateButtonStyled } from "./styles";

//Stores
import collectionStore from "../stores/collectionStore";

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

const CollectionModal = ({ isOpen, closeModal, oldCollection }) => {
  const [collection, setCollection] = useState(
    oldCollection ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setCollection({ ...collection, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setCollection({ ...collection, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    collectionStore[oldCollection ? "updateCollection" : "createCollection"](
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
      <h3>New Collection</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            required
            type="text"
            name="name" //exact name of the argument in collectionModal function
            onChange={handleChange}
            value={collection.name}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="file"
            onChange={handleImage}
            className="form-control"
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldCollection ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CollectionModal;
