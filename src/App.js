import React from "react";
import NotebookList from "./components/NotebookList/NotebookList";


//Routes
import Routes from "./components/routes/index"


// Stores
import notebookStore from "./stores/notebookStore"
import collectionStore from "./stores/collectionStore"

function App() {
  return ( <div> 
    {/* <NavBar
    currentTheme={currentTheme}
    toggleTheme={toggleTheme}
    logo={logo}
  /> */}
  {collectionStore.loading || notebookStore.loading ? (
    <h1>Loadinggg</h1>
  ) : (
    <Routes />
  )}{" "}
    
 </div> );
}

export default App;
