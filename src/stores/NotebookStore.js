import { decorate, observable } from "mobx";
import axios from "axios";
import notebooks from "../notebooks";

class NotebookStore {
  notebooks = notebooks;
  //   loading = true;

    fetchNotebooks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/notebooks");
        this.notebooks = response.data;
        this.loading = false;
      } catch (error) {
        console.error("NotebookStore -> fetchNotebook -> error", error);
      }
    };

    getNotebookByID = (notebookID) => {
      return this.notebooks.find((notebook) => notebook.id === notebookID);
    };

      createNotebook = async (newNotebook, shop) => {
        try {
          const formData = new FormData();
          for (const key in newNotebook) formData.append(key, newNotebook[key]);
          const res = await axios.post(
            `http://localhost:8000/shops/${shop.id}/notebooks`,
            formData
          );
          const notebook = res.data;
          this.notebooks.push(notebook);
          shop.notebooks.push({ id: res.data.id });
        } catch (error) {
          console.log("notebookStore -> createNotebook -> error", error);
        }
      };

    updateNotebook = async (updatedNotebook) => {
      try {
        const formData = new FormData();
        for (const key in updatedNotebook)
          formData.append(key, updatedNotebook[key]);

        //update in the backend
        await axios.put(
          `http://localhost:8000/notebooks/${updatedNotebook.id}`,
          formData
        );
        // update in frontend
        const notebook = this.notebooks.find(
          (notebook) => notebook.id === updatedNotebook.id
        );
        for (const key in notebook) notebook[key] = updatedNotebook[key];
        notebook.image = URL.createObjectURL(updatedNotebook.image);
      } catch (error) {
        console.log("NotebookStore -> UpdateNotebook => error", error);
      }
    };

    deleteNotebook = async (notebookID) => {
      await axios.delete(`http://localhost:8000/notebooks/${notebookID}`);
      this.notebooks = this.notebooks.filter(
        (notebook) => notebook.id !== notebookID
      );
    };
}

decorate(NotebookStore, {
  notebooks: observable,
  //   loading: observable,
});

const notebookStore = new NotebookStore();
// notebookStore.fetchNotebooks();

export default notebookStore;
