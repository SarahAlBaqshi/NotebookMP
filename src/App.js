import React from "react";
import NotebookList from "./components/NotebookList/NotebookList";

//Routes
import Routes from "./components/routes/index";

// Stores
import notebookStore from "./stores/notebookStore";
import collectionStore from "./stores/collectionStore";
import { observer } from "mobx-react";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <div>
      {/* <NavBar
    currentTheme={currentTheme}
    toggleTheme={toggleTheme}
    logo={logo}
  /> */}
      <GlobalStyle />
      {collectionStore.loading || notebookStore.loading ? (
        <h1>Loadinggg</h1>
      ) : (
        <Routes />
      )}{" "}
    </div>
  );
}

export default observer(App);
