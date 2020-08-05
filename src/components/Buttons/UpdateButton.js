import React, { useState } from "react";
import NotebookModal from "../../modals/NotebookModal";

// Styling
import { UpdateButtonStyled } from "../../styles";
import CollectionModal from "../../modals/CollectionModal";

const UpdateButton = ({ notebook, collection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      {collection ? (
        <CollectionModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldCollection={collection}
        />
      ) : (
        <NotebookModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldNotebook={notebook}
        />
      )}
    </>
  );
};

export default UpdateButton;
