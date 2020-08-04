import React from "react";
import { Link } from "react-router-dom";

//components

//styles
import { NotebookWrapper } from "../../styles";

const NotebookItem = ({ notebook }) => {
  return (
    <NotebookWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/notes/${notebook.slug}`}>
        <img alt={notebook.name} src={notebook.image} />
      </Link>
      <p>{notebook.name}</p>
      {/* <UpdateButton notebook={notebook} />
          <DeleteButton notebookID={notebook.id} />{" "} */}
    </NotebookWrapper>
  );
};

export default NotebookItem;
