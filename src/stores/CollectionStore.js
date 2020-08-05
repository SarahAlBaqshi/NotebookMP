import { decorate, observable } from "mobx";
import axios from "axios";

class CollectionStore {
  collections = [];
  loading = true;

  fetchCollections = async () => {
    try {
      const response = await axios.get("http://localhost:8000/collections");
      this.collections = response.data;
      this.loading = false;
    } catch (error) {
      console.error("CollectionStore -> fetchCollection -> error", error);
    }
  };

  createCollection = async (newCollection) => {
    try {
      const formData = new FormData();
      for (const key in newCollection) formData.append(key, newCollection[key]);
      const res = await axios.post(
        `http://localhost:8000/collections`,
        formData
      );
      this.collections.push(res.data);
    } catch (error) {
      console.log("collectionStore -> createCollection -> error", error);
    }
  };

  updateCollection = async (updatedCollection) => {
    try {
      const formData = new FormData();
      for (const key in updatedCollection)
        formData.append(key, updatedCollection[key]);

      //update in the backend
      await axios.put(
        `http://localhost:8000/collections/${updatedCollection.id}`,
        formData
      );
      // update in frontend
      const collection = this.collections.find(
        (collection) => collection.id === updatedCollection.id
      );
      for (const key in updatedCollection)
        collection[key] = updatedCollection[key];
    } catch (error) {
      console.log("CollectionStore -> UpdateCollection => error", error);
    }
  };

  deleteCollection = async (collectionId) => {
    await axios.delete(`http://localhost:8000/collections/${collectionId}`);
    this.collections = this.collections.filter(
      (collection) => collection.id !== collectionId
    );
  };
}

decorate(CollectionStore, {
  collections: observable,
  loading: observable,
});

const collectionStore = new CollectionStore();
collectionStore.fetchCollections();

export default collectionStore;
