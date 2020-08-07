import React, { useState } from "react";
import Modal from "react-modal";

//Styles
import { CreateButtonStyled } from "../styles";

//Stores
import tagStore from "../stores/tagStore";

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

const TagModal = ({ notebook, isOpen, closeModal, oldTag }) => {
  const [tag, setTag] = useState(
    oldTag ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setTag({ ...tag, [event.target.name]: event.target.value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    tagStore.createTag(tag,notebook);
    // tagStore[oldTag ? "updateTag" : "createTag"](
    //   tag,
    //   notebook
    // );
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>New Tag</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Tag Name</label>
            <input
              required
              type="text"
              name="name" //exact name of the argument in tagModal function
              onChange={handleChange}
              value={tag.name}
              className="form-control"
            />
          </div>
    

        
        </div>
    

        <CreateButtonStyled className="btn float-right">
           Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default TagModal;
