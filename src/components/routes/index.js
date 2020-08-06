import React from 'react';
import { Switch, Route } from "react-router";
import { observer } from "mobx-react";

//Components
import NotebookList from "../NotebookList/NotebookList";
import NotebookDetail from "../NotebookList/NotebookDetail";
import CollectionList from "../CollectionList/CollectionList";
import CollectionDetail from "../CollectionList/CollectionDetail";


//Stores
import notebookStore from "../../stores/notebookStore";



const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/collections/:collectionSlug">
                    <CollectionDetail />
                </Route>
                <Route path="/collections">
          <CollectionList />
        </Route>
        <Route path="/notebooks/:notebookSlug">
          <NotebookDetail />
        </Route>
        <Route path="/notebooks">
          <NotebookList notebooks={notebookStore.notebooks} />
        </Route>
            </Switch>
        </div>
    );
};

export default observer(Routes);