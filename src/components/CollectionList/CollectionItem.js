import React from "react";
import { observer } from "mobx-react";

//Styles
import { CollectionItemImage } from "../../styles";
import { Link } from "react-router-dom";

const CollectionItem = ({ collection }) => {
  return (
    <Link to={`/collections/${collection.slug}`}>
      <CollectionItemImage src={collection.image} alt={collection.name} />
      <p>{collection.name}</p>
    </Link>
  );
};

export default observer(CollectionItem);
