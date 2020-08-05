import React, { useState } from "react";

//Modals
import NotebookModal from "../../modals/NotebookModal";

//Styles
import { IoIosAddCircle } from "react-icons/io";
import CollectionModal from "../../modals/CollectionModal";

const AddButton = ({ collection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <IoIosAddCircle
        className="float-right"
        size="2em"
        onClick={() => setIsOpen(true)}
      />

      {collection ? (
        <NotebookModal
          collection={collection}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <CollectionModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
