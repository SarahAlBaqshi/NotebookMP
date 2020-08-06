import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// //buttons
// import DeleteButton from "../Components/Buttons/DeleteButton";
// import UpdateButton from "./Buttons/UpdateButton";

//style
import { DetailWrapper } from "../../styles";

//stores
import notebookStore from "../../stores/notebookStore";

const BookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find((notebook) => notebook.slug === notebookSlug);
  if (!notebook) return <Redirect to="/notebooks" />;

  return (
    <DetailWrapper>
      <h1>{notebook.name}</h1>
      <img src={notebook.image} alt={notebook.name} />
      <p>{notebook.description}</p>
      {/* <UpdateButton notebook={notebook} />
      <DeleteButton notebookId={notebook.id} /> */}
    </DetailWrapper>
  );
};

export default observer(BookDetail);
