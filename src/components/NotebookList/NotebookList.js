import React, { useState } from "react";

//components
import NotebookItem from "./NotebookItem";

//stores
import notebookStore from "../../stores/NotebookStore";

//styles
import { ListWrapper } from "../../styles";

const NotebookList = ({ notebook }) => {
  const [query, setQuery] = useState("");

  const notebookList = notebookStore.notebooks
    .filter((notebook) =>
      notebook.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((notebook) => <NotebookItem notebook={notebook} key={notebook.id} />);

  return (
    <div className="container">
      {/* <SearchBar setQuery={setQuery} /> */}
      <ListWrapper>{notebookList}</ListWrapper>
    </div>
  );
};

export default NotebookList;
