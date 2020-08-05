import React from "react";

//Styles
import { CollectionItemImage } from "../../styles";
import { Link } from "react-router-dom";

const CollectionItem = ({ collection }) => {
  return (
    <Link to={`/collections/${collection.slug}`}>
      <CollectionItemImage src={collection.image} alt={collection.name} />
    </Link>
  );
};

export default CollectionItem;
