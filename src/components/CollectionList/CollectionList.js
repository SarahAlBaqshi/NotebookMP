import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import CollectionItem from "./CollectionItem";

//styles
import { Title, CollectionWrapper } from "../../styles";

//Stores
import collectionStore from "../../stores/collectionStore";

import SearchBar from "../SearchBar";
import AddButton from "../Buttons/AddButton";

const CollectionList = () => {
  const [query, setQuery] = useState("");

  const collectionList = collectionStore.collections
    .filter((collection) =>
      collection.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((collection) => (
      <CollectionItem collection={collection} key={collection.id} />
    ));
  return (
    <div>
      <Title>Notebooks</Title>
      <SearchBar setQuery={setQuery} />
      <CollectionWrapper>{collectionList} </CollectionWrapper>
      <AddButton />
    </div>
  );
};

export default observer(CollectionList);
