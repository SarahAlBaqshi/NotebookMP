import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//styles
import { NotebookWrapper } from "../../styles";

const NotebookItem = ({ notebook }) => {
  return (
    <NotebookWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/notebooks/${notebook.slug}`}></Link>
      <div className="card mt-4">
        <p>{notebook.name}</p>
      </div>
      <div className="card-body">
        <p>{notebook.description}</p>
  <p>{notebook.tags}</p>
      </div>
      {/* <UpdateButton notebook={notebook} />
          <DeleteButton notebookID={notebook.id} />{" "} */}
    </NotebookWrapper>
  );
};

export default observer(NotebookItem);
