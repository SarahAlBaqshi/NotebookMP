import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import NotebookList from "../NotebookList/NotebookList";

//buttons
// import DeleteButton from "../Components/Buttons/DeleteButton";
// import UpdateButton from "./Buttons/UpdateButton";
import AddButton from "../Buttons/AddButton";

//style
import { CollectionDetailWrapper, Title } from "../../styles";

//stores
import collectionStore from "../../stores/collectionStore";
import notebookStore from "../../stores/notebookStore";


const CollectionDetail = () => {
  const { collectionSlug } = useParams();

  const collection = collectionStore.collections.find(
    (collection) => collection.slug === collectionSlug
  );
  if (!collection) return <Redirect to="/collections" />;

  let notebooks = [];
if (collection.notebooks) { notebooks = collection.notebooks
.map(notebook => notebookStore.getNotebookByID(notebook.id))
.filter(notebook => notebook)}


  return (
    <>
      <CollectionDetailWrapper>
        <Title>{collection.name}</Title>
        <img src={collection.image} alt={collection.name} />
        {/* <UpdateButton collection={collection} /> */}
        {/* <DeleteButton collectionId={collection.id} /> */}
      </CollectionDetailWrapper>
      <div className="container">
        <AddButton collection={collection} />
        <NotebookList notebooks={notebooks} />
      </div>
    </>
  );
};

export default observer(CollectionDetail);