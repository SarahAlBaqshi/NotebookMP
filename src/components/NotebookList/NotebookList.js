import React, { useState } from "react";
import { observer } from "mobx-react";

//components
import NotebookItem from "./NotebookItem";
import SearchBar from "../SearchBar"

//styles
import { ListWrapper } from "../../styles";

const NotebookList = ({ notebooks }) => {
  const [query, setQuery] = useState("");

  const notebookList = notebooks
    .filter((notebook) =>
      notebook.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((notebook) => <NotebookItem notebook={notebook} key={notebook.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{notebookList}</ListWrapper>
    </div>
  );
};

export default observer(NotebookList);
